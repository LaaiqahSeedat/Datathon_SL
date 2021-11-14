from os import name
from django.urls import path as p
from . import views as v 

urlpatterns = [
    p('', v.home,name="Home"),
    p('general_mental_health_check/', v.gmentalh, name="General Mental Health"),
    p('anxietyCheck/', v.anxietyCheck),
    p('FuturePredict/', v.FuturePredict),
]
