import React from 'react'

function CountrySearch() {


    const [searchQuery, setSearchQuery] = React.useState('');


    const searchLocation = (query) => {
        axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    setSelectedPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });

                    // Send a POST request to the Flask API for predictions
                    axios.post('http://127.0.0.1:4000/predict', {
                        latitude: parseFloat(lat),
                        longitude: parseFloat(lon)
                    })
                        .then(response => {
                            setDepthMagnitude({
                                depth: response.data.depth_prediction,
                                magnitude: response.data.magnitude_prediction
                            });
                        })
                        .catch(error => console.error('Error fetching predictions:', error));
                }
            })
            .catch(error => console.error('Error fetching location data:', error));
    };
  return (
    <>

    <div className='mx-4 mb-3'>

                <input
                type="text"
                placeholder="🔍 Search Country"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        searchLocation(searchQuery);
                    }
                }}
                className="p-3 font-xl rounded-lg border shadow-xl my-3 "
            />
    </div>
    </>
  )
}

export default CountrySearch