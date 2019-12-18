import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = (props) => {
    return (
        <>
            <Map
                google={props.google}
                zoom={8}
                initialCenter={{ lat: 51.9278891, lng: 4.3503239}}
            />
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAxuaMP4jaqjXgydBvlZ3Xq-cbKxvuvOvA'
  })(MapContainer);