from django.shortcuts import render
from .models import *
from django.http import JsonResponse
# Create your views here.

def index(request):
    return render (request, 'index.html')

def getStudents(request):
    rows = Students.objects.all()

    my_list = []
    for row in rows:
        my_list.append(
            {
                'id':row.id,
                'name':row.name,
                'image':row.image.url
            }
        )

    return JsonResponse({'values': my_list})

