
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Persona

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from django.http import JsonResponse


def api_login_required(view):
    def wrapper(request, *args, **kwargs):

        if not request.user.is_authenticated:
            return JsonResponse(
                {"error": "No autenticado"},
                status=401
            )

        return view(request, *args, **kwargs)

    return wrapper

@login_required
def dashboard(request):
    return render(request, "dashboard.html")



@api_login_required
@csrf_exempt
def lista_personas(request):

    if request.method == "GET":

        personas = Persona.objects.all()

        data = []

        for persona in personas:
            data.append({
            "id": persona.id,
            "nombre": persona.nombre,
            "email": persona.email,
            "edad": persona.edad,
            "casa": persona.casa, 
        })

        return JsonResponse(data, safe=False)


    elif request.method == "POST":

        persona = Persona.objects.create(
            nombre=request.POST.get("nombre"),
            email=request.POST.get("email"),
            edad=request.POST.get("edad"),
            casa=request.POST.get("casa")
        )

        return JsonResponse({
            "mensaje": "Persona creada",
            "id": persona.id
        })



    try:
        persona = Persona.objects.get(id=id)

    except Persona.DoesNotExist:
        return JsonResponse({
            "error": "Persona no encontrada"
        }, status=404)


    if request.method == "DELETE":

        persona.delete()

        return JsonResponse({
            "mensaje": "Persona eliminada"
        })

@api_login_required
@csrf_exempt
def persona_detail(request, id):

    try:
        persona = Persona.objects.get(id=id)

    except Persona.DoesNotExist:
        return JsonResponse({
            "error":"No existe"
        }, status=404)


    if request.method == "GET":

        return JsonResponse({
            "id": persona.id,
            "nombre": persona.nombre,
            "email": persona.email,
            "edad": persona.edad,
            "casa": persona.casa,
            
            
        })


    elif request.method == "POST":

        print("POST:", request.POST)
        

        persona.nombre = request.POST.get(
            "nombre",
            persona.nombre
        )

        persona.email = request.POST.get(
            "email",
            persona.email
        )

        persona.edad = request.POST.get(
            "edad",
            persona.edad
        )


        persona.casa = request.POST.get(
                "casa",
                 persona.casa
        )

        persona.save()


        return JsonResponse({
            "mensaje":"Persona actualizada"
            
        })

        
    

    elif request.method == "DELETE":

        persona.delete()

        return JsonResponse({
            "mensaje":"Eliminada"
        })

