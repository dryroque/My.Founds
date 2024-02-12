from datetime import datetime
from contas.models import ContaPaga, ContaPagar

def buscar_contas(request):
    MES_ATUAL = datetime.now().month
    DIA_ATUAL = datetime.now().day

    contas = ContaPagar.objects.filter(user=request.user)

    contas_pagas = ContaPaga.objects.filter(data_pagamento__month=MES_ATUAL).values('conta').filter(user=request.user)

    contas_vencidas = contas.filter(dia_pagamento__lt=DIA_ATUAL).exclude(id__in=contas_pagas).filter(user=request.user)

    contas_proximas_vencimento = contas.filter(dia_pagamento__lte = DIA_ATUAL + 7).filter(dia_pagamento__gt=DIA_ATUAL).exclude(id__in=contas_pagas).filter(user=request.user)
    
    restantes = contas.exclude(id__in=contas_vencidas).exclude(id__in=contas_proximas_vencimento).exclude(id__in=contas_pagas).filter(user=request.user)
    
    return contas_vencidas, contas_proximas_vencimento, restantes, contas_pagas