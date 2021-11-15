from django.db.models import fields
from rest_framework import serializers
from .models import  AgeAnxiety, GenderAnxiaty


# This class is to assit us in converting the model data to json data

#Serialize the population by age
class genderanxiatySerializer(serializers.ModelSerializer):

    class Meta:
        model   = GenderAnxiaty
        fields  = '__all__'

class ageanxiatySerializer(serializers.ModelSerializer):

    class Meta:
        model   = AgeAnxiety
        fields  = '__all__'


    

