import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import CustomMarker from '../../../static/mapsicon.png'

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
                mapContainerStyle={{height: 400,
                                    display: 'flex'}}
                center={{lat: lat, lng: lng}}
                zoom={10}
            >
                <Marker
                    position={{lat:lat, lng:lng}}
                    icon={CustomMarker} />    
            </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MapContainer;