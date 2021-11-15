import pandas as pd
import os

dirname = os.path.realpath("..")
ageDF = pd.read_csv(dirname+'\DataSets\prevalence-of-anxiety-disorders-by-age.csv')
ageDF = ageDF[(ageDF['Entity'] == "South Africa")]

ageDF.drop('Code',inplace=True, axis=1)
ageDF.drop('Entity',inplace=True, axis=1)
ageDF.drop('Prevalence - Anxiety disorders - Sex: Both - Age: Age-standardized (Percent)',inplace=True, axis=1)
ageDF.drop('TenToFourteen',inplace=True, axis=1)
ageDF.drop('ThirtyToThirtyFour',inplace=True, axis=1)
ageDF.drop('FifteenToNineteen',inplace=True, axis=1)
ageDF.drop('TwentyToTwentyNine',inplace=True, axis=1)
ageDF.drop('TwentyToTwentyFour',inplace=True, axis=1)

"""

All i want is 

Underfive
FiveToFourteen
FifteenToFourtyNine
FiftyToSixtynine
Overseventy
AllAges
"""
ageDF.to_csv(dirname+'\DataSets\AnxietyByAge.csv')


