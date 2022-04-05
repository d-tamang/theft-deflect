import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import MapContainer from './map_container'

const MapWrapper = () => (
    <Wrapper apiKey={"AIzaSyDhm27MhVA89tLn0zM3WdLTl06Yt3FZZWI&libraries=visualization"}>
        <MapContainer />
    </Wrapper>
);

export default MapWrapper;
