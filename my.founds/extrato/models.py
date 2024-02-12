from django.db import models
from perfil.models import Categoria, Conta
from django.contrib.auth.models import User

# Create your models here.

class Valores(models.Model):
    choice_tipo = (
        ('E', 'Entrada'),
        ('S', 'Saída')
    )
    
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    valor = models.FloatField()
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)
    descricao = models.TextField()
    data = models.DateField()
    conta = models.ForeignKey(Conta, on_delete=models.DO_NOTHING)
    tipo = models.CharField(max_length=1, choices=choice_tipo)

    def _str_(self):
        return self.descricao