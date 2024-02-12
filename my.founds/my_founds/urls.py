from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuarios/', include('usuarios.urls')), #criando a url de cadastro
    path('perfil/', include('perfil.urls')), #criando a url perfil
    path('extrato/', include('extrato.urls')), # criando a url extrato
    path('planejamento/', include('planejamento.urls')), # criando a url planejamento
    path('contas/', include('contas.urls')), # criando a url contas
]
