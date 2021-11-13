from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

def home(request):
    api_urls = {
        'Test URL':'test/',
    }
    return Response(api_urls)

def test(request):
    respose_json = {
        'Test':'I got you'
    }
    return Response(respose_json)
