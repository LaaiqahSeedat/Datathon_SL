# Python Script : Testing social anxiety classifier

import joblib as joblib

modelName = "Anxiety_Classifier_model.pik"

#input parameters:
""""""
['Age', 'EducationLevel', 'Gender', 'HasFamilyHistory', 'Occupation',
       'ATF', 'EAF', 'TKF', 'CMT', 'DEF', 'SMF', 'ERF', 'DAF', 'HR', 'SW',
       'TR', 'DR', 'BR', 'CK', 'CP', 'NS', 'DZ', 'UR', 'UB', 'MD', 'TG']
""""""


def classifier(x_test):
    loaded_model = joblib.load(modelName)  # Load in the model
    return loaded_model.predict(x_test)[0]