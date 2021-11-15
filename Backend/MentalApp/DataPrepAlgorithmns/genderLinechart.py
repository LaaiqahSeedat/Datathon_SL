import pandas as pd
import os
import numpy as np
"""
Create table with total population
"""

#get the relative path
dirname = os.path.realpath('..')
#get the file into data frame
anxietyData =  pd.read_csv(dirname+'\DataSets\prevalence-of-anxiety-disorders-males-vs-females.csv')

#get only south africa dataframe
newaData = anxietyData[(anxietyData['Entity'] == "South Africa")]

#rename dataframe
newaData = newaData.rename(columns={'Prevalence - Anxiety disorders - Sex: Male - Age: Age-standardized (Percent)':'Male', 
                                  'Prevalence - Anxiety disorders - Sex: Female - Age: Age-standardized (Percent)':'Female'})

#save the dataframe as csv
newaData.to_csv(dirname+'\DataSets\MalesVsFemales_Anxiety.csv')

#get general population over the years
populationData =  pd.read_csv(dirname+'\DataSets\API_SP.POP.TOTL_DS2_en_csv_v2_3158886.csv')
newpData = populationData[(populationData['Country Name'] == "South Africa")]

newpData = pd.DataFrame(newpData)

#delete  un needed years
for i in range(1960, 2021):
    if(i <= 1989 or i >=2018):
        newpData.drop(str(i),inplace=True, axis=1)

print(newpData['Country Name'])

finalDF = {'Year':[], 'Male_Anxiety':[], 'Female_Anxiety':[], 'Percentage_Male':[],
            'Percentage_Female':[], 'Total_Percentage':[]}

finalDF = pd.DataFrame(finalDF)

#i will populate them column by column because my brain is too tired to think of an algorithmn to do all
rowsCount = 0
for i in newaData.iterrows():
    if(i[1]['Year'] <= 2017 and i[1]['Year'] >= 1990):
        #get anxities
        maleAnxiety= (i[1]['Male'] * i[1]['Total population (Gapminder, HYDE & UN)']) / 100
        Female_Anxiety = (i[1]['Female'] * i[1]['Total population (Gapminder, HYDE & UN)']) / 100
        
        malePerc = "{:.2f}".format(i[1]['Male'])
        femalePerc = "{:.2f}".format(i[1]['Female'])

        totalPerc = malePerc + femalePerc

        tempDF = pd.DataFrame({'Year':[i[1]['Year']], 'Male_Anxiety':[maleAnxiety], 'Female_Anxiety':[Female_Anxiety], 'Percentage_Male':[malePerc],
            'Percentage_Female':[femalePerc], 'Total_Percentage':[totalPerc]})
      
        finalDF = finalDF.append(tempDF,ignore_index=True)
    else:
        break
    
finalDF.index +=1 
finalDF.to_csv(dirname+'\DataSets\Finale_MaleVsFemale_Anxiety.csv')
