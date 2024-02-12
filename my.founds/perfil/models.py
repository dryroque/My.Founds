from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.

class Categoria(models.Model):
    categoria = models.CharField(max_length=50)
    essencial = models.BooleanField(default=False)
    valor_planejamento = models.FloatField(default=0)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.categoria
    
    def total_gasto(self):
        from extrato.models import Valores
        valores = Valores.objects.filter(categoria__id = self.id).filter(data__month=datetime.now().month).filter(tipo='S')

        total_valor = 0
        for valor in valores:
            total_valor += valor.valor
        
        return total_valor
    
    def calcula_percentual_gasto_por_categoria(self):
        return int((self.total_gasto() * 100) / self.valor_planejamento)

class Conta(models.Model):
    tipo_choices = (
        ('pf', 'pessoa fisica'),
        ('pj', 'pessoa juridica')
    )
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    apelido = models.CharField(max_length=50)
    banco = models.CharField(max_length=50)
    tipo = models.CharField(max_length=2, choices=tipo_choices)
    valor = models.FloatField()

    def __str__(self):
        return self.apelido