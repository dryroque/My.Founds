from django.db import models
from perfil.models import Categoria
from django.contrib.auth.models import User

# Create your models here.

class ContaPagar(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    titulo = models.CharField(max_length=50)
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)
    descricao = models.TextField()
    valor = models.FloatField()
    dia_pagamento = models.IntegerField()
    
    def _str_(self):
        return self.titulo

class ContaPaga(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    conta = models.ForeignKey(ContaPagar, on_delete=models.DO_NOTHING)
    data_pagamento = models.DateField()