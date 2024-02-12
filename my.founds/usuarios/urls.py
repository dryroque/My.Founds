from django.urls import path
from . import views

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('logar/', views.logar, name='logar'),
    path('logout/', views.logout, name='logout'),
    path('inicio/', views.inicio, name='inicio'),
    path('admin/', views.logout, name='admin'),
]