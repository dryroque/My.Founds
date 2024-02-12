from django.urls import path, include
from . import views


urlpatterns = [
    path('home/', views.home, name="home"), # criando a pagina home
    path('gerenciar/', views.gerenciar, name="gerenciar"), # criando a pagina gerenciar
    path('cadastrar_banco/', views.cadastrar_banco, name="cadastrar_banco"), # criando a pagina cadastrar banco
    path('deletar_banco/<int:id>', views.deletar_banco, name="deletar_banco"), # criando a pagina deletar banco
    path('cadastrar_categoria/', views.cadastrar_categoria, name="cadastrar_categoria"), # criando a pagina cadastrar categoria
    path('update_categoria/<int:id>', views.update_categoria, name="update_categoria"), # criando a pagina para atualizar a categoria
    path('dashboard/', views.dashboard, name="dashboard"), # criando a pagina dashboard
]