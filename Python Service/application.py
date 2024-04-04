from flask import Flask, request, jsonify
import pickle
from datetime import datetime, timedelta
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

# Load your models
with open('knndepth.pkl', 'rb') as f:
    modeldepth = pickle.load(f)
with open('randommagnitude.pkl', 'rb') as f:
    modelmagnitude = pickle.load(f)

class PredictionResponse:
    def __init__(self, date, depth_prediction, magnitude_prediction):
        self.date = date
        self.depth_prediction = depth_prediction
        self.magnitude_prediction = magnitude_prediction

@app.route('/predict', methods=['POST'])
def predict():
    request_data = request.get_json()
    latitude = request_data['latitude']
    longitude = request_data['longitude']
    
    # Assuming the model expects time in Unix format
    time_unix = datetime.now().timestamp()
        
    # Preprocess inputs as required by your model
    # For example, scaling or encoding the inputs
    
    # Make predictions
    depth_prediction = modeldepth.predict([[latitude, longitude]])
    magnitude_prediction = modelmagnitude.predict([[latitude, longitude, depth_prediction[0], time_unix]])
    
    # Return predictions
    response = PredictionResponse(date=datetime.now().strftime('%Y-%m-%d'), depth_prediction=depth_prediction[0], magnitude_prediction=magnitude_prediction[0])
    return jsonify(response.__dict__)

@app.route('/predictWithTime', methods=['POST'])
def predict_with_timestamp():
    request_data = request.get_json()
    latitude = request_data['latitude']
    longitude = request_data['longitude']
    timestamp = request_data['timestamp'] # Assuming the timestamp is in 'yyyy-dd-mm' format
    
    # Parse the timestamp string into a datetime object
    timestamp_datetime = datetime.strptime(timestamp, '%Y-%d-%m')
    
    # Convert the datetime object to Unix time if needed
    timestamp_unix = timestamp_datetime.timestamp()
    
    # Preprocess inputs as required by your model
    # For example, scaling or encoding the inputs
    
    # Make predictions
    depth_prediction = modeldepth.predict([[latitude, longitude]])
    magnitude_prediction = modelmagnitude.predict([[latitude, longitude, depth_prediction[0], timestamp_unix]])
    
    # Return predictions
    response = PredictionResponse(date=timestamp_datetime.strftime('%Y-%m-%d'), depth_prediction=depth_prediction[0], magnitude_prediction=magnitude_prediction[0])
    return jsonify(response.__dict__)

@app.route('/predictRange', methods=['POST'])
def predict_range():
    request_data = request.get_json()
    latitude = request_data['latitude']
    longitude = request_data['longitude']
    from_date = request_data['from_date']
    to_date = request_data['to_date']
    
    # Parse the date strings into datetime objects
    from_date = datetime.strptime(from_date, '%Y-%m-%d')
    to_date = datetime.strptime(to_date, '%Y-%m-%d')
    
    # Convert the datetime objects to Unix time if needed
    from_date_unix = from_date.timestamp()
    to_date_unix = to_date.timestamp()
    
    responses = []
    current_date = from_date

    while current_date <= to_date:
        time_unix = current_date.timestamp()
        depth_prediction = modeldepth.predict([[latitude, longitude]])
        magnitude_prediction = modelmagnitude.predict([[latitude, longitude, depth_prediction[0], time_unix]])
        responses.append(PredictionResponse(date=current_date.strftime('%Y-%m-%d'), depth_prediction=depth_prediction[0], magnitude_prediction=magnitude_prediction[0]))
        current_date += timedelta(days=1)
    
    return jsonify([response.__dict__ for response in responses])

if __name__ == '__main__':
    app.run(debug=True)
    app.run(port=4000)
