import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = (props) => {
    return (
        <>
            <Map
                google={props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBX0is-IJhjwTfVVkmm3Z5oA8URTq8zxwQ'
  })(MapContainer);