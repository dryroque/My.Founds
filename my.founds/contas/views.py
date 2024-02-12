from django.shortcuts import render, redirect, get_list_or_404
from perfil.models import Categoria, Conta
from .models import ContaPagar, ContaPaga
from django.contrib import messages
from django.contrib.messages import constants
from datetime import datetime, date
from django.urls import reverse
from django.contrib.auth.decorators import login_required


# Create your views here.

# criando a funcao definir contas
@login_required
def definir_contas(request):
    if request.method == 'GET':
        categorias = Categoria.objects.filter(user=request.user)
        return render(request, 'definir_contas.html', {'categorias': categorias})
    else:
        titulo = request.POST.get('titulo')
        categoria = request.POST.get('categoria')
        descricao = request.POST.get('descricao')
        valor = request.POST.get('valor')
        dia_pagamento = request.POST.get('dia_pagamento')

        conta = ContaPagar(
            user=request.user,
            titulo=titulo,
            categoria_id=categoria,
            descricao=descricao,
            valor=valor,
            dia_pagamento=dia_pagamento
        )

        conta.save()

        messages.add_message(request, constants.SUCCESS, 'Conta cadastrada com sucesso!')
        return redirect('/contas/definir_contas')
    
# criando a funcao de contas vencidas ou proximas
@login_required
def ver_contas(request):
    MES_ATUAL = datetime.now().month
    DIA_ATUAL = datetime.now().day

    contas = ContaPagar.objects.filter(user=request.user)

    contas_pagas = ContaPaga.objects.filter(data_pagamento__month=MES_ATUAL).values('conta').filter(user=request.user)

    contas_vencidas = contas.filter(dia_pagamento__lt=DIA_ATUAL).exclude(id__in=contas_pagas)

    contas_proximas_vencimento = contas.filter(dia_pagamento__lte = DIA_ATUAL + 7).filter(dia_pagamento__gt=DIA_ATUAL).exclude(id__in=contas_pagas)
    
    restantes = contas.exclude(id__in=contas_vencidas).exclude(id__in=contas_proximas_vencimento).exclude(id__in=contas_pagas)
    
    return render(request, 'ver_contas.html', {'contas_vencidas': contas_vencidas, 'contas_proximas_vencimento': contas_proximas_vencimento, 'restantes': restantes, 'contas_pagas': contas_pagas})
    
# criando a funcao de conta paga
def pagar_conta(request, id):
    data_pagamento = datetime.now()

    conta = ContaPaga(
        user=request.user,
        conta_id = id,
        data_pagamento = data_pagamento
    )

    conta.save()

    messages.add_message(request, constants.SUCCESS, 'Conta paga com sucesso!')

    return redirect('/contas/ver_contas')