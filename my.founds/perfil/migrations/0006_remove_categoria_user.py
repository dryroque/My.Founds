# Generated by Django 5.0.1 on 2024-02-04 00:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0005_categoria_categoria_categoria_essencial_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categoria',
            name='user',
        ),
    ]
