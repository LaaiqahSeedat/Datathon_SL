# Python Script : Boston house price prediction server
import joblib as joblib
import pandas as pd
from flask import Flask, request

app = Flask(__name__)

modelName = "Boston_model.pik"


# (Usage):
# server expects a json object with keys ["CRIM", "NOX", "AGE", "TAX", "RM"]
# Server returns a json object with the predicted Boston house price(Float)
# the returned json object has key ["Prediction"]
@app.route("/predict", methods=['GET', 'POST'])
def showPrediction():
    column = ["CRIM", "NOX", "AGE", "TAX", "RM"]
    v = request.json
    x_test = pd.DataFrame(columns=column, data=[v])
    p = predict(x_test)
    return {"Prediction": p}


def predict(x_test):
    loaded_model = joblib.load(modelName)  # Load in the model
    return loaded_model.predict(x_test)[0]  # Return the prediction


if __name__ == "__main__":
    app.run(debug=True)
