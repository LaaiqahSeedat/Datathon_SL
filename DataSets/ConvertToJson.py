import csv, json 

csvFilePath = "Finale_MaleVsFemale_Anxiety.csv"
jasonFilePath = "anxietyAge2.json"


#read the csv abd add data to dictionary
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        entity = csvRow["Year"]
        data[entity] = csvRow

#write the data to json file 
with open(jasonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))