# Python Script : Testing social anxiety classifier

import joblib as joblib

modelName = "Anxiety_Classifier_model.pik"

#input parameters:
""""""
['Age', 'EducationLevel', 'Gender', 'HasFamilyHistory', 'Occupation',
       'ATF', 'EAF', 'TKF', 'CMT', 'DEF', 'SMF', 'ERF', 'DAF', 'HR', 'SW',
       'TR', 'DR', 'BR', 'CK', 'CP', 'NS', 'DZ', 'UR', 'UB', 'MD', 'TG']
"""""
2 age: age in years
3 EducationLevel: Education level ( 1=High School; 2=Diploma; 3=Undergraduate; 4=Bachelor degree; 5=Master degree; 6=Post-graduate
4 Gender: sex (1 = male; 0 = female)
5 HasFamilyHistory: Family history of anxiety or depression (1 = yes; 0 = no)
6 Occupation: (1=Student; 2=Faculty member; 3=Employee; 4=self-employment; 5=Unemployed )
7 ATF: The fear of being at the center of attention (Range=0-10)
8 EAF: The fear of eating in front of another person (Range=0-10)
9 TKF: The fear of speaking in public (Range=0-10)
10 CMT: The fear of attending parties (Range=0-10)
11 DEF: The fear of eating and drinking in public places(Range=0-10)
12 SMF: The fear of meeting or contact with strangers (Range=0-10)
13 ERF: The fear of getting in a room where others are sitting (Range=0-10)
14 DAF: The fear of disagreement with strangers (Range=0-10)
15 HR: Has heart palpitations (1=yes; 0=no )
16 SW: Has sweating (1=yes; 0=no )
17 TR: Has a tremor (1=yes; 0=no )
18 DR: Has dry mouth (1=yes; 0=no )
19 BR: Has hard breathing (1=yes; 0=no )
20 CK: Has  a feeling of suffocation (1=yes; 0=no )
21 CP: Has chest pain (1=yes; 0=no )
22 NS: Has gastrointestinal discomfort and nausea (1=yes; 0=no )
23 DZ: Has a feeling of dizzy, weak and sick (1=yes; 0=no )
24 UR: Has a feeling of being unreal (1=yes; 0=no )
25 UB: Has a fear of losing balance (1=yes; 0=no )
26 MD: Has a fear of being crazy (1=yes; 0=no )
27 TG: Has numbness or moaning (1=yes; 0=no )

"""""


def classifier(x_test):
    loaded_model = joblib.load(modelName)  # Load in the model
    return loaded_model.predict([x_test])[0]

def classifierPercentages(x_test):
    loaded_model = joblib.load(modelName)  # Load in the model
    return loaded_model.predict_proba([x_test])[0]

x_test = [37,	5,	1,	1,	3,	4,	0,	6,	1,	0,	2,	3,	1,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0]

v = classifierPercentages(x_test)
# Output an array of probabilities for being either a "0" or "1"
# eg [0.25 0.75] means that it 25% "0" and 75% "1"

print(v)


# Testing anxiety forecast

modelName2 = "Anxiety_Females_model.pik"


def predictNumPeople(year_value):
    loaded_model = joblib.load(modelName2)  # Load in the model
    return loaded_model.predict([[year_value]])[0]


year = 2030
v = predictNumPeople(year)
print(v)