from django.shortcuts import render, redirect
from perfil.models import Categoria, Conta
from django.http import HttpResponse, FileResponse
from .models import Valores
from django.contrib import messages
from django.contrib.messages import constants
from datetime import datetime, timedelta
from django.template.loader import render_to_string
import os
from django.conf import settings
from weasyprint import HTML
from io import BytesIO
from django.contrib.auth.decorators import login_required


# Create your views here.

# criando a funcao de novo valor
@login_required
def novo_valor(request):
    if request.method == 'GET':
        contas = Conta.objects.filter(user=request.user)
        categorias = Categoria.objects.filter(user=request.user)
        return render(request, 'novo_valor.html', {'contas': contas, 'categorias': categorias})
    elif request.method == 'POST':
        valor = request.POST.get('valor')
        categoria = request.POST.get('categoria')
        descricao = request.POST.get('descricao')
        data = request.POST.get('data')
        conta = request.POST.get('conta')
        tipo = request.POST.get('tipo')

        valores = Valores(
            user=request.user,
            valor = valor,
            categoria_id = categoria,
            descricao = descricao,
            data = data,
            conta_id = conta,
            tipo = tipo,
        )

        valores.save()

        conta = Conta.objects.get(id=conta)

        if tipo == 'E':
            conta.valor += int(valor)
        else:
            conta.valor -= int(valor)

        conta.save()

        if tipo == 'E':
            messages.add_message(request, constants.SUCCESS, 'Entrada cadastrada com sucesso!')
        elif tipo == 'S':
            messages.add_message(request, constants.SUCCESS, 'Saída cadastrada com sucesso!')

        return redirect('/extrato/novo_valor')
    
# criando a funcao para mostrar os extratos
@login_required
def view_extrato(request):
    contas = Conta.objects.filter(user=request.user)
    categorias = Categoria.objects.filter(user=request.user)

    opcao_padrao = 0

    conta_get = request.GET.get('conta')
    categoria_get = request.GET.get('categoria')
    data_get = request.GET.get('periodo')

    valores = Valores.objects.filter(user=request.user)
    
    if conta_get: 
        valores = valores.filter(conta_id = conta_get)
    
    if categoria_get: 
        valores = valores.filter(categoria_id = categoria_get)

    if data_get:
        data_atual = datetime.now().date()
        dias = int(data_get)
        data_filtro = data_atual - timedelta(days=dias)
        valores = valores.filter(data__gte=data_filtro, data__lte=data_atual)
    
    return render(request, 'view_extrato.html', {'valores': valores, 
                                                 'contas': contas, 
                                                 'categorias': categorias, 
                                                 'opcao_padrao': opcao_padrao})

# criando a funcao para exportar extrato
@login_required
def exportar_pdf(request):
    valores = Valores.objects.filter(data__month=datetime.now().month)

    path_template = os.path.join(settings.BASE_DIR, 'templates/partial/extrato.html')
    
    template_render = render_to_string(path_template, {'valores': valores})

    path_output = BytesIO()

    HTML(string=template_render).write_pdf(path_output)

    path_output.seek(0)
    
    return FileResponse(path_output, filename="extrato.pdf")