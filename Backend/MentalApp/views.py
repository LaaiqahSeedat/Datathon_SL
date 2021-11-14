from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def home(request):
    api_urls = {
        'General Mental Health URL':'general_mental_health_check/',
    }
    return Response(api_urls)

@api_view(['POST'])
def gmentalh(request):
    theData = request.data
    
    print(theData.get("Gender"))

    respose_json = {
        'Result':'You are at risk of ADHD'
    }
    return Response(respose_json)

@api_view(['POST'])
def depression(request):
    theData = request.data
    emptiness = theData.get("Emptiness")
    age = theData.get("age")
    print(emptiness)
    response = {
        "Result":"Empty Dude"
    }

    return Response(response)



