from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Conta, Categoria
from django.contrib import messages
from django.contrib.messages import constants
from .utils import calcula_total, calcular_equilibrio_financeiro
from extrato.models import Valores
from datetime import datetime
from contas.utils import buscar_contas
from django.contrib.auth.decorators import login_required

# Create your views here.

# funcao da pagina home

def home(request):
    if not request.user.is_authenticated:
        return redirect('/usuarios/logar')
    
    valores = Valores.objects.filter(data__month=datetime.now().month).filter(user=request.user)
    entradas = valores.filter(tipo='E')
    saidas = valores.filter(tipo='S')

    total_entradas = calcula_total(entradas, 'valor')
    total_saidas = calcula_total(saidas, 'valor')

    contas = Conta.objects.filter(user=request.user)

    total_contas = calcula_total(contas, 'valor')
    percentual_gastos_essenciais, percentual_gastos_nao_essenciais = calcular_equilibrio_financeiro(request)

    total_livre = total_entradas - total_saidas

    contas_pagas, contas_vencidas, contas_proximas_vencimento, restantes = buscar_contas(request)

    return render(request, 'home.html', {'contas': contas, 
                                         'total_contas': total_contas, 
                                         'total_entradas': total_entradas, 
                                         'total_saidas': total_saidas,
                                         'percentual_gastos_essenciais': int(percentual_gastos_essenciais),
                                         'percentual_gastos_nao_essenciais': int(percentual_gastos_nao_essenciais),
                                         'total_livre': total_livre,
                                         'contas_pagas': contas_pagas,
                                         'contas_vencidas': contas_vencidas.count(),
                                         'contas_proximas_vencimento': contas_proximas_vencimento.count(),
                                         'restantes': restantes.count()})

# funcao da pagina gerenciar
@login_required
def gerenciar(request):
    contas = Conta.objects.filter(user=request.user)
    categorias = Categoria.objects.filter(user=request.user)

    total_contas = calcula_total(contas, 'valor')
    
    return render(request, 'gerenciar.html', {'contas': contas, 'total_contas': total_contas, 'categorias': categorias})

# funcao da pagina cadastrar banco
@login_required
def cadastrar_banco(request):
    apelido = request.POST.get('apelido')
    banco = request.POST.get('banco')
    tipo = request.POST.get('tipo')
    valor = request.POST.get('valor')
    
    if len(apelido.strip()) == 0 or len(valor.strip()) == 0 or len(banco.strip()) == 0:
        messages.add_message(request, constants.ERROR, "Preencha todos os campos!")
        return redirect('/perfil/gerenciar/')

    conta = Conta(
        user=request.user,
        apelido=apelido,
        banco=banco,
        tipo=tipo,
        valor=valor,
    )

    conta.save()

    messages.add_message(request, constants.SUCCESS, "Conta cadastrada com sucesso!")
    return redirect('/perfil/gerenciar/')

# funcao deletar banco
@login_required
def deletar_banco(request, id):
    conta = Conta.objects.get(id=id)
    conta.delete()
    messages.add_message(request, constants.SUCCESS, "Conta deletada com sucesso!")
    return redirect('/perfil/gerenciar/')

# funcao cadastrar categoria
@login_required
def cadastrar_categoria(request):
    nome = request.POST.get('categoria')
    essencial = bool(request.POST.get('essencial'))

    if len(nome.strip()) == 0:
        messages.add_message(request, constants.ERROR, "Preencha todos os campos!")
        return redirect('/perfil/gerenciar/')

    categoria = Categoria(
        user=request.user,
        categoria=nome,
        essencial=essencial
    )

    categoria.save()

    messages.add_message(request, constants.SUCCESS, 'Categoria cadastrada com sucesso!')
    return redirect('/perfil/gerenciar/')

# criando a funcao para atualizar a categoria
def update_categoria(request, id):
    categoria = Categoria.objects.get(id=id)

    categoria.essencial = not categoria.essencial

    categoria.save()

    messages.add_message(request, constants.SUCCESS, 'Categoria atualizada com sucesso!')
    return redirect('/perfil/gerenciar/')

# criando a funcao da dashboard
@login_required
def dashboard(request):
    dados = {}

    categorias = Categoria.objects.filter(user=request.user)

    for categoria in categorias:
        total = 0
        valores = Valores.objects.filter(categoria=categoria)

        for v in valores:
            total += v.valor

        dados[categoria.categoria] = total

    return render(request, 'dashboard.html', {'labels': list(dados.keys()), 'values': list(dados.values())})