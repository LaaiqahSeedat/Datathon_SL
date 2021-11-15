from os import name
from django.urls import path as p
from . import views as v 

urlpatterns = [
    p('', v.home,name="Home"),
    p('anxietyCheck/', v.anxietyCheck),
    p('FuturePredict/', v.FuturePredict),
    p('genderAnxiety/', v.getPrevGenderRecords),
]
