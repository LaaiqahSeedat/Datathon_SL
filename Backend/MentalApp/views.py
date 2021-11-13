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
