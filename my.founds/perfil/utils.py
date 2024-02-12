from extrato.models import Valores
from datetime import datetime


def calcula_total(obj, campo):
    total = 0
    for i in obj:
        total += getattr(i, campo)
    return total

def calcular_equilibrio_financeiro(request):
    gastos_essenciais = Valores.objects.filter(data__month=datetime.now().month).filter(tipo='S').filter(categoria__essencial=True).filter(user=request.user)
    gastos_nao_essenciais = Valores.objects.filter(data__month=datetime.now().month).filter(tipo='S').filter(categoria__essencial=False).filter(user=request.user)

    total_gastos_essenciais = calcula_total(gastos_essenciais, 'valor')
    total_gastos_nao_essenciais = calcula_total(gastos_nao_essenciais, 'valor')

    total = total_gastos_essenciais + total_gastos_nao_essenciais

    try:
        percentual_gastos_essenciais = total_gastos_essenciais * 100 / total
        percentual_gastos_nao_essenciais = total_gastos_nao_essenciais * 100 / total
        return percentual_gastos_essenciais, percentual_gastos_nao_essenciais
    except:
        return 0, 0

def calcula_percentual_valor(valor, total):
    try:
        percentual_valor = (valor * 100) / total
        return round(percentual_valor)
    except:
        return 0