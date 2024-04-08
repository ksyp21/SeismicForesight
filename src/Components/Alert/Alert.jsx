import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet.locatecontrol'; // Import plugin
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'; // Import styles
import L from 'leaflet'; // Import L from leaflet to start using the plugin

const Alert = () => {

    const LocateControl = () => {
        const map = useMap();

        useEffect(() => {
            const lc = L.control.locate().addTo(map);
            return () => {
                map.removeControl(lc);
            };
        }, []); // Empty dependency array to run only once

        return null;
    };

    return (
        <div>


            {/* Card container */}
            <div style={{
                width: '600px', // Adjust the width as needed
                height: '400px', // Adjust the height as needed
                margin: '0 auto', // Center the card horizontally
                border: '1px solid #ccc', // Optional: Add a border
                borderRadius: '5px', // Optional: Add rounded corners
                overflow: 'hidden', // Ensure the map does not overflow the card
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional: Add a shadow for depth
            }}>
                <MapContainer center={[28.3949, 84.1240]} zoom={5} style={{ height: '100%', width: '100%' }}>
                    <LocateControl />
                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="Stadia Satellite">
                            <TileLayer

                                url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg'
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="OpenStreetMap BZH">
                            <TileLayer

                                url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Stadia Smooth Dark">
                            <TileLayer

                                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Stamen Toner">
                            <TileLayer

                                url='https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png'
                            />
                        </LayersControl.BaseLayer>
                    </LayersControl>

                </MapContainer>

            </div>
            <center>Get alert for earthquake with out system. Pin your location</center>
        </div>
    );
};

export default Alert;
