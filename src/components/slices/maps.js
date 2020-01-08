import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api'

export const MapContainer = (props) => {
    const lat = props.slice.primary.shop_location.latitude;
    const lng = props.slice.primary.shop_location.longitude

    return (
        <>
            <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyAxuaMP4jaqjXgydBvlZ3Xq-cbKxvuvOvA"
            >
            <GoogleMap
                id='example-map'
                center={{lat: lat, lng: lng}}
                zoom={10}
            >    
            </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MapContainer;