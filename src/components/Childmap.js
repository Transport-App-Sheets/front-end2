import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './stylemapcontainer.css'
  import 'leaflet/dist/leaflet.css'
import styles from './child.css'
const Childmap = () => {
  
  const [center, setCenter] = useState([31.6310, -7.9993]); // default center coordinates
  const [children, setChildren] = useState([
    { name: 'Child 1', latlng: [31.6340, -7.9993] },
    { name: 'Child 2', latlng: [31.6330, -7.9993] },
    { name: 'Child 3', latlng: [31.6350, -7.9993] },
  ]);

  // Use the browser's geolocation API to get the current position of the user
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update the center of the map with the user's current location
          setCenter([position.coords.latitude, position.coords.longitude]);

          // Update the position of the first child with the user's current location
          setChildren((prevState) => {
            const updatedChildren = [...prevState];
            updatedChildren[0].latlng = [position.coords.latitude, position.coords.longitude];
            return updatedChildren;
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="div1" style={styles }>
    <Box>
 
      <MapContainer center={center} zoom={16} className='leaflet-container' >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {children.map((child) => (
          <Marker
            position={child.latlng}
            key={child.name}
            icon={
              new L.Icon({
                iconUrl: 'https://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1',
                iconRetinaUrl: 'https://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1',
                iconSize: [50, 50],
              })
            }
          >
            <Popup>{child.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      
      </Box></div>
  );
};

export default Childmap;