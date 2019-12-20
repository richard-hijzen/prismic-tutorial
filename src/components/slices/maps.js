import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
    const lat = props.slice.primary.shop_location.latitude;
    const lng = props.slice.primary.shop_location.longitude

    return (
        <div 
            style={{width: '100%', height: '400px', position: 'relative'}}>
            <Map
                google={props.google}
                className={'map'}
                zoom={14}
                initialCenter={{ lat: lat, lng: lng}}
            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: lat, lng: lng}} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAxuaMP4jaqjXgydBvlZ3Xq-cbKxvuvOvA'
  })(MapContainer);