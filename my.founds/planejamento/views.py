from django.shortcuts import render, redirect
from perfil.models import Categoria
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib import messages
from django.contrib.messages import constants
from django.contrib.auth.decorators import login_required
from datetime import datetime
from extrato.models import Valores
from perfil.models import Categoria
from perfil.utils import calcula_total, calcula_percentual_valor

# Create your views here.

# criando a funcao definir planejamento
@login_required
def definir_planejamento(request):
    categorias = Categoria.objects.filter(user=request.user)
    return render(request, 'definir_planejamento.html', {'categorias': categorias})

# criando a funcao atualizar valor da categoria
@login_required
@csrf_exempt
def update_valor_categoria(request, id):
    novo_valor = json.load(request)['novo_valor']
    categoria = Categoria.objects.get(id=id)
    categoria.valor_planejamento = novo_valor
    
    categoria.save()

    messages.add_message(request, constants.SUCCESS, "Valor da categoria atualizado com sucesso!")
    
    return JsonResponse(request, 'definir_planejamento.html', {'valor': f'recebi {id}', 'definir_planejamento': definir_planejamento})

# criando a funcao ver planejamento
@login_required
def ver_planejamento(request):
    categorias = Categoria.objects.filter(user=request.user)

    total_valor_gasto = 0

    for categoria in categorias:
        total_valor_gasto += categoria.total_gasto()

    total_valor_planejamento = calcula_total(categorias, 'valor_planejamento')

    total_percentual_gasto = calcula_percentual_valor(total_valor_gasto, total_valor_planejamento)

    return render(request, 'ver_planejamento.html', {'categorias': categorias,
                                                     'total_valor_gasto': total_valor_gasto,
                                                     'total_valor_planejamento': total_valor_planejamento,
                                                     'total_percentual_gasto': total_percentual_gasto})