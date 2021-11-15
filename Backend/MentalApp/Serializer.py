from django.db.models import fields
from rest_framework import serializers
from .models import  GenderAnxiaty


# This class is to assit us in converting the model data to json data

#Serialize the population by age
class genderanxiatySerializer(serializers.ModelSerializer):

    class Meta:
        model   = GenderAnxiaty
        fields  = '__all__'

