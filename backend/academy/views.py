
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Persona


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
            "imagen": persona.imagen.url if persona.imagen else None,
        })

        return JsonResponse(data, safe=False)


    elif request.method == "POST":

        persona = Persona.objects.create(
            nombre=request.POST.get("nombre"),
            email=request.POST.get("email"),
            edad=request.POST.get("edad"),
            imagen=request.FILES.get("imagen")
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
            
        })


    elif request.method == "POST":

        print("POST:", request.POST)
        print("FILES:", request.FILES)

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


        if request.FILES.get("imagen"):
            persona.imagen = request.FILES.get("imagen")


        persona.save()


        return JsonResponse({
            "mensaje":"Persona actualizada"
            
        })

        
    

    elif request.method == "DELETE":

        persona.delete()

        return JsonResponse({
            "mensaje":"Eliminada"
        })

