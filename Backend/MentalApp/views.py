from os import sep
import os
from django.shortcuts import render
from rest_framework.decorators import api_view
import pandas as pd
from .models import GenderAnxiaty as gA
from .Serializer import genderanxiatySerializer as gS
from rest_framework.response import Response
import csv
#../../Datasets/anxiety
from .Machine_Learning.anxiety.testModels import TestingModels as tS
#import testmodels as testM
# Create your views here.

@api_view(['GET'])
def home(request):
    api_urls = {
        'Check For Anxiety':'anxietyCheck/',
        'Get Gender Anxiety stats':'genderAnxiety/',
        'Check For Anxiety':'anxietyCheck/',
    }
    
    return Response(api_urls)

@api_view(['GET'])
def getPrevGenderRecords(request):
    
    gStats = gA.objects.all() 
    gSerialized = gS(gStats, many = True)

    genderRecords = {"SOmething":"whatever"}

    return Response(gSerialized.data)

@api_view(['POST']) 
def anxietyCheck(request):
    theData = request.data

    #Getting all the values

    age = theData.get("age")                        #getting the age
    edLevel = theData.get("EducationLevel")         #( 1=High School; 2=Diploma; 3=Undergraduate; 4=Bachelor degree; 5=Master degree; 6=Post-graduate
    gender = theData.get("Gender")                  #1. male or 0.female 
    familyHistory = theData.get("HasFamilyHistory") #Family history of anxiety depression (1=yes; 0=No)
    occupation = theData.get("Occupation")          # (1=Student; 2=Faculty member; 3=Employee; 4=self-employment; 5=Unemployed )
    atf = theData.get("ATF")                        #The fear of being the center of the attention(0-10) 
    eaf = theData.get("EAF")                        #The fear of eating in front of another person(0-10) 
    tkf = theData.get("TKF")                        #The fear of speaking in public(0-10)
    cmt = theData.get("CMT")                        #The fear of attending parties(0-10)
    fearEatDrink = theData.get("DEF")               #The fear of eating and drinking in public places(0-10)
    smf = theData.get("SMF")                        #The fear of meeting or contact with strangers(0-10)
    erf = theData.get("ERF")                        #The fear of getting in room with others/strangers(0-10)
    daf = theData.get("DAF")                        #The fear of disagreement with strangers(0-10)
    hr = theData.get("HR")                          #Has heart palpitaions(1=yes; 0=No)
    sw = theData.get("SW")                          #Has sweating(1=yes; 0=No)
    tr = theData.get("TR")                          #has tremor(1=yes; 0=No)
    dr = theData.get("DR")                          #Has dry mouth(1=yes; 0=No)
    br = theData.get("BR")                          #has hard breathing(1=yes; 0=No)
    ck = theData.get("CK")                          #has a feeling of suffocation(1=yes; 0=No)
    cp = theData.get("CP")                          #has chest pain(1=yes; 0=No)
    ns = theData.get("NS")                          #Has gastrointestinal discomfort and nausea(1=yes; 0=No)
    dz = theData.get("DZ")                          #Has a feeling of dizzy, weak and sick(1=yes; 0=No)
    ur = theData.get("UR")                          #Has a feeling of being unreal(1=yes; 0=No)
    ub = theData.get("UB")                          #Has a fear of loosing balance(1=yes; 0=No)
    md = theData.get("MD")                          #Has a fear of being crazy(1=yes; 0=No)
    tg = theData.get("TG")                          #has numbness or moaning(1=yes; 0=No)
  


    params = [age, edLevel, gender, familyHistory, occupation, atf, eaf, tkf, cmt, fearEatDrink, smf, erf, daf, hr, sw, tr, dr, br, ck, cp, ns,  dz, ur, ub, md, tg]
    anxietyornot = tS.classifier(params)
    
    accuracyPerc = tS.classifierPercentages(params)
    #accuracyPerc.split(sep="[ ]" , maxsplits="3")
    print(accuracyPerc)

    noAnxiety = accuracyPerc[0] * 100
    Anxiety = accuracyPerc[1] * 100
    Anxiety = round(Anxiety, 2)
    print(noAnxiety)
    print(Anxiety)
    prob_json = {
        'Probability':anxietyornot,
        'No_Anxiety':noAnxiety,
        'Anxiety':Anxiety
        }

    return Response(prob_json)

@api_view(['POST']) 
def FuturePredict(request):
    theData = request.data

    year = theData.get("Year")

    model = tS.predictNumPeople(year)
    print(model)
    model_json = {"Future Prediction": model}
    print(model_json)

    
    csv_file = open("../../DataSets/Future_prediction.csv", "w")
    csv_writer = csv.tocsv(csv_file)
    csv_writer.writerow(["Year", "Prediction"])
   
    csv_writer.writerow([year, model])
    csv_file.close()
    return Response(model_json)

@api_view(['POST']) 
def CreatePredict(request):
    theData = request.data

    year = theData.get("Year")

    model = tS.predictNumPeople(year)
    print(model)
    model_json = {"Future Prediction": model}
    print(model_json)

    
    csv_file = open("../../DataSets/Future_prediction.csv", "w")
    csv_writer = csv.tocsv(csv_file)
    csv_writer.writerow(["Year", "Prediction"])
   
    csv_writer.writerow([year, model])
    csv_file.close()
    return Response(model_json)
