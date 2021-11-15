import pandas as pd
import os

dirname = os.path.realpath("..")
ageDF = pd.read_csv(dirname+'\DataSets\prevalence-of-anxiety-disorders-by-age.csv')

print(ageDF)
