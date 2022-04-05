import React from 'react';
import './map.css';
import PinFormContainer from '../pin/pin_form_container';

class Map extends React.Component {
    constructor(props){
        super(props);
        this.logContainer = React.createRef();
        this.state = {
            formOpen: false
        }
        this.toggleReportListener = this.toggleReportListener.bind(this);
        this.placeMarker = this.placeMarker.bind(this);
        this.changeGradient = this.changeGradient.bind(this);
    }

    componentDidMount(){

        // san francisco
        const center = { lat: 37.777652, lng: -122.437503 };
        const zoom = 12;
        this.map = new window.google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
        });

        this.heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: this.heatMapData()
        });

        document
            .getElementById("change-gradient")
            .addEventListener("click", () => this.changeGradient());

        this.heatmap.setMap(this.map);
    }

    handleClickOutsideForm = (event) => {
        if (this.logContainer.current && !this.logContainer.current.contains(event.target)) {
            this.setState({
                formOpen: false,
            });
            this.marker.setMap(null);
        }
    }

    changeGradient() {
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
      
        this.heatmap.set("gradient", this.heatmap.get("gradient") ? null : gradient);
    }

    placeMarker(location) {
        this.marker = new window.google.maps.Marker({
            position: location, 
            map: this.map
        });
        console.log(location.lat())
        console.log(location.lng())
        
        this.setState({
            formOpen: true,
            lat: location.lat(),
            lng: location.lng(),
        })
        document.addEventListener("mousedown", this.handleClickOutsideForm);
        window.google.maps.event.removeListener(this.map_key);
        this.map_key = null;
    }

    toggleReportListener(e){
        if (this.map_key) return;
        this.map_key = window.google.maps.event.addListener(this.map, 'click', (event) => {
            this.placeMarker(event.latLng);
        });
        if(this.marker){
            this.marker.setMap(null);
        }
    }

    render(){

        return(
            <div>
                {this.state.formOpen && (
                    <div ref={this.logContainer} className='pinForm'>
                        <PinFormContainer lat={this.state.lat} long={this.state.lng}/>
                    </div>
                )}
                <div id="floating-panel">
                    <button id="toggle-heatmap">Toggle Heatmap</button>
                    <button id="change-gradient">Change gradient</button>
                    <button id="change-radius">Change radius</button>
                    <button id="change-opacity">Change opacity</button>
                    <button id="add-incident" onClick={this.toggleReportListener}>Report Incident</button>
                </div>
                <div id="map" />
            </div>
        )
    }


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

    errors(Status){
        if (Status === Status.LOADING) return <h3>{Status} ..</h3>;
        if (Status === Status.FAILURE) return <h3>{Status} ...</h3>;
        return null;
    };

}

export default Map;