# Generated by Django 5.0.1 on 2024-02-03 21:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0003_categoria_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categoria',
            name='categoria',
        ),
        migrations.RemoveField(
            model_name='categoria',
            name='essencial',
        ),
        migrations.RemoveField(
            model_name='categoria',
            name='user',
        ),
        migrations.RemoveField(
            model_name='categoria',
            name='valor_planejamento',
        ),
    ]
