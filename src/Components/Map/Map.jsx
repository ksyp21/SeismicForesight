import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import axios from 'axios'; // Import axios
import Search from '../SearchBar/Search';

const Map = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [depthMagnitude, setDepthMagnitude] = useState({ depth: null, magnitude: null });


    const Markers = () => {
        const map = useMapEvents({
            click(e) {
                handleEvent(e.latlng.lat, e.latlng.lng);
            },
        });

        const handleEvent = (latitude, longitude) => {
            setSelectedPosition({ lat: latitude, lng: longitude });

            // Send a POST request to the Flask API for predictions
            axios.post('http://127.0.0.1:4000/predict', {
                latitude: latitude,
                longitude: longitude
            })
                .then(response => {
                    setDepthMagnitude({
                        depth: response.data.depth_prediction,
                        magnitude: response.data.magnitude_prediction
                    });
                })
                .catch(error => console.error('Error fetching predictions:', error));
        };

        return null; // This component does not render anything
    };




    return (
        <>
        <div className='py-8'>



            <MapContainer center={[28.3949, 84.1240]} zoom={5}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Stadia Satellite">
                        <TileLayer
                            attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>'
                            url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap BZH">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>'
                            url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Stadia Smooth Dark">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Stamen Toner">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                <Markers />
                {selectedPosition && (
                    <>
                        <Marker position={selectedPosition} />
                        <Popup position={selectedPosition}>
                            {`Latitude: ${selectedPosition.lat.toFixed(3)}, Longitude: ${selectedPosition.lng.toFixed(3)}`}
                            {depthMagnitude.depth && <p>Depth: {depthMagnitude.depth}</p>}
                            {depthMagnitude.magnitude && <p>Magnitude: {depthMagnitude.magnitude}</p>}
                        </Popup>
                    </>

                )}


            </MapContainer>
        </div>




                </>
    );
};

export default Map;
