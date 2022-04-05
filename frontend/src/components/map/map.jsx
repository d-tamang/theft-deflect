import React from 'react';
import './map.css';

class Map extends React.Component {
    constructor(props){
        super(props);
    }

    errors(Status){
        if (Status === Status.LOADING) return <h3>{Status} ..</h3>;
        if (Status === Status.FAILURE) return <h3>{Status} ...</h3>;
        return null;
    };

    heatMapData(){
        return [
            {location: new window.google.maps.LatLng(37.782, -122.447), weight: 0.5},
            new window.google.maps.LatLng(37.782, -122.445),
            {location: new window.google.maps.LatLng(37.782, -122.443), weight: 2},
            {location: new window.google.maps.LatLng(37.782, -122.441), weight: 3},
            {location: new window.google.maps.LatLng(37.782, -122.439), weight: 2},
            new window.google.maps.LatLng(37.782, -122.437),
            {location: new window.google.maps.LatLng(37.782, -122.435), weight: 0.5},
        
            {location: new window.google.maps.LatLng(37.785, -122.447), weight: 3},
            {location: new window.google.maps.LatLng(37.785, -122.445), weight: 2},
            new window.google.maps.LatLng(37.785, -122.443),
            {location: new window.google.maps.LatLng(37.785, -122.441), weight: 0.5},
            new window.google.maps.LatLng(37.785, -122.439),
            {location: new window.google.maps.LatLng(37.785, -122.437), weight: 2},
            {location: new window.google.maps.LatLng(37.785, -122.435), weight: 3}
        ];
    }

    changeGradient(heatmap) {
        const gradient = [
          "rgba(0, 255, 255, 0)",
          "rgba(0, 255, 255, 1)",
          "rgba(0, 191, 255, 1)",
          "rgba(0, 127, 255, 1)",
          "rgba(0, 63, 255, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(0, 0, 223, 1)",
          "rgba(0, 0, 191, 1)",
          "rgba(0, 0, 159, 1)",
          "rgba(0, 0, 127, 1)",
          "rgba(63, 0, 91, 1)",
          "rgba(127, 0, 63, 1)",
          "rgba(191, 0, 31, 1)",
          "rgba(255, 0, 0, 1)",
        ];
      
        heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
    }

    componentDidMount(){

        // san francisco
        const center = { lat: 37.777652, lng: -122.437503 };
        const zoom = 12;
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
        });

        let heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: this.heatMapData()
        });

        document
            .getElementById("change-gradient")
            .addEventListener("click", (heatmap) => this.changeGradient(heatmap));

        heatmap.setMap(map);
    }

    render(){

        return(
            <div>
                <div id="floating-panel">
                    <button id="toggle-heatmap">Toggle Heatmap</button>
                    <button id="change-gradient">Change gradient</button>
                    <button id="change-radius">Change radius</button>
                    <button id="change-opacity">Change opacity</button>
                </div>
                <div id="map" />
            </div>
        )
    }

}

export default Map;