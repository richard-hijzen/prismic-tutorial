import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = (props) => {


    return (
        <div 
            style={{width: '100%', height: '400px', position: 'relative'}}>
            <Map
                google={props.google}
                className={'map'}
                zoom={14}
                initialCenter={{ lat: 51.9278891, lng: 4.3503239}}
            />
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAxuaMP4jaqjXgydBvlZ3Xq-cbKxvuvOvA'
  })(MapContainer);