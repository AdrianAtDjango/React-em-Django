from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=255)
    idade = models.IntegerField(max_length=2)
    email = models.CharField(max_length=255)

    def __str__():
        return Pessoa.nome