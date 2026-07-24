
from django.urls import path
from . import views


urlpatterns = [
    path("api/personas/", views.lista_personas),
    path("api/personas/<int:id>/", views.persona_detail),
]