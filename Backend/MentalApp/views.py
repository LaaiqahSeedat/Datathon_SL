from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
#../../Datasets/anxiety
from .anxiety import testModels
#import testmodels as testM
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
    hasSad = theData.get("hasSAD")                  #are u feeling sad(1=yes; 0=No)


    params = [age, edLevel, gender, familyHistory, occupation, atf, eaf, tkf, cmt, fearEatDrink, smf, erf, daf, hr, sw, tr, dr, br, ck, cp, ns,  dz, ur, ub, md, tg]
    model = testModels.classifierPercentages(params)
    prob_json = {'Probability':model}

    return Response(prob_json)

    """
    #You have depression 
    if((age >= 0) & ((gender == 1) or (gender == 0)) & (familyHistory == 1 or familyHistory == 0)):
        if ((atf >= 9) & (eaf >= 9) & (tkf >= 9) & (cmt >= 9) & (smf >= 9) & (erf >= 9) & (daf >= 9) & (fearEatDrink >= 9)):
            if(hr == 1) &  (sw == 1) & (tr == 1) & (dr == 1) & (br == 1) & (ck == 1) & (cp == 1) & (ns == 1) & (dz == 1) & (ur == 1) & (ub == 1) & (md == 1) & (tg == 1) & (hasSad == 1):
                response = {
                    "Result" : "You have high chances of having a Anxiety. Please concult a nearby Psychologist"
                }

     #You have no depression 
    if((age >= 0) & ((gender == 1) or (gender == 0)) & (familyHistory == 1 or familyHistory == 0)):
        if ((atf <= 2) & (eaf <= 9) & (tkf <= 9) & (cmt <= 9) & (smf <= 9) & (erf <= 9) & (daf <= 9)):
            if(hr == 0) &  (sw == 0) & (tr == 0) & (dr == 0) & (br == 0) & (ck == 0) & (cp == 0) & (ns == 0) & (dz == 0) & (ur == 0) & (ub == 0) & (md == 0) & (tg == 0) & (hasSad == 0):
                response = {
                    "Result" : "You have no symptoms of Anxiety."
                }
"""


