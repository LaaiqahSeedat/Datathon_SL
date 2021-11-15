import csv, json 
#os.chdir("/Users/ubaid/Downloads/Data Science competetion")
csvFilePath = "/Users/ubaid/Downloads/Data Science competetion/Github/Datathon_SL/DataSets/prevalence-of-anxiety-disorders-by-age.csv"
jasonFilePath = "/Users/ubaid/Downloads/Data Science competetion/Github/Datathon_SL/DataSets/anxietyAge.json"


#read the csv abd add data to dictionary
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        entity = csvRow["Entity"] == "South Africa"
        data[entity] = csvRow

#write the data to json file 
with open(jasonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))
   
