import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function Search({ setMarkers }) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [predictions, setPredictions] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:4000/predictRange', {
        latitude,
        longitude,
        from_date: startDate.toISOString().split('T')[0],
        to_date: endDate.toISOString().split('T')[0]
      });
      setPredictions(response.data);

      // Update markers on the map based on the submitted location
      setMarkers([{ lat: parseFloat(latitude), lng: parseFloat(longitude) }]);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  return (
    <>
      <div className="absolute z-0 pb-[9rem] w-screen mx-2 my-8 text-lg text-center items-center justify-center bg-gray-100 shadow-lg sm:overflow-hidden ">


        <div className='text-2xl py-4 my-4'>
            Enter latitude and longitude to generate report:
        </div>

        <div className='text-lg '>
        <label htmlFor="latitude">Latitude: &nbsp;</label>
        <input
          type="text"
          placeholder="Enter Latitude"
          className="mb-8 border rounded-lg border-gray-200"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        </div>


        <div>
            <label htmlFor="longitude">Longitude: &nbsp;</label>
        <input
          type="text"
          placeholder="Enter Longitude"
          className="mb-8 border rounded-lg border-gray-200"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        </div>


        <div className='grid gap-6'>
            <div>
          <label htmlFor="from">From: &nbsp;</label>
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={date => setStartDate(date)}
            className='border border-none shadow-lg'
          />
            </div>

            <div>
          <label htmlFor="to">To: &nbsp;</label>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={date => setEndDate(date)}
            className="shadow-lg"
          />
            </div>
        </div>
        <button onClick={handleSubmit} className="rounded-xl bg-green-500 px-4 text-white py-2 my-4">
          Generate Report
        </button>
        <div>
          {predictions.map((prediction, index) => (
            <div key={index}>
              <p>Date: {prediction.date}</p>
              <p>Depth Prediction: {prediction.depth_prediction}</p>
              <p>Magnitude Prediction: {prediction.magnitude_prediction}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
