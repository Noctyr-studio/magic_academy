
from django.db import models


class Persona(models.Model):

    nombre = models.CharField(max_length=100)

    email = models.EmailField()

    edad = models.PositiveIntegerField()

    imagen = models.ImageField(
        upload_to="personas/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.nombre