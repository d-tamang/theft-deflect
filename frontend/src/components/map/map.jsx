import React from 'react';
import './map.css';
import PinFormContainer from '../pin/pin_form_container';
import { style, gradient } from './map_style'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.logContainer = React.createRef();
        this.markers = [];
        this.HeatMarkers = [];
        this.zoom = 13;
        this.state = {
            formOpen: false,
        }
        this.toggleReportListener = this.toggleReportListener.bind(this);
        this.placeMarker = this.placeMarker.bind(this);
        this.setMarkers = this.setMarkers.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.closeAllInfoWindows = this.closeAllInfoWindows.bind(this);

    }

    componentDidMount() {

        // Center is San Francisco
        const center = { lat: 37.777652, lng: -122.437503 };
        const zoom = 12;
        this.map = new window.google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_CENTER,
            },
        });
        this.map.setOptions({ styles: style })

        // adds listener for when zoom is clicked
        this.map.addListener('zoom_changed', () => {
            this.changeMapType();
        });

        this.map.addListener('click', (e) => {
            this.closeAllInfoWindows();
        })

        this.props.fetchPins()
            .then(() => this.generateMarkers())
            .then(() => this.generateHeatMap())
            .then(() => this.heatmap.setMap(this.map))
            .then(() => this.heatmap.set("gradient", gradient));
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.pins.length !== this.props.pins.length) {
            this.setState({ formOpen: false });
            if (this.marker) {
                this.marker.setMap(null);
            }
        }
    }

    changeMapType() {
        if (!this.map) return;
        let zoomLevel = this.map.getZoom();
        if (zoomLevel > this.zoom) {
            this.setMarkers();
            this.heatmap.setMap(null);
        } else {
            this.clearMarkers();
            this.heatmap.setMap(this.map);
        }
    }

    generateNewSeeds() {
        // early return if no new pins added or removed
        if (this.props.pins.length === this.markers.length) return;
        this.generateMarkers();
        this.generateHeatMap();
        this.changeMapType();
    }

    generateMarkers() {
        if (!this.props.pins) return;
        if (this.props.pins.length === this.markers.length) return;
        let newPins = this.props.pins;
        let length = this.markers.length;
        for (let i = newPins.length - 1; i >= length; i--) {
            let marker = new window.google.maps.Marker({
                position: { lat: newPins[i].lat, lng: newPins[i].long },
                title: newPins[i].category
            })
            let date = new Date(parseInt(newPins[i]._id.substring(0, 8), 16) * 1000);
            let pinDate = date.toString().slice(3, 15);
            // let infoWindow = new window.google.maps.InfoWindow({
            //     content: `<div>${pinDate}</div>` + `<a href="http://localhost:3000/#/pins/${newPins[i]._id}">See More</a>`
            marker.infoWindow = new window.google.maps.InfoWindow({
                content: `<div>${pinDate}</div>` + `<a href="http://localhost:3000/#/pins/${newPins[i]._id}">See More</a>`
            })
            marker.addListener('click', () => {
                this.closeAllInfoWindows();
                marker.infoWindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: false,
                })
                this.setState({ clickedPin : newPins[i]});
            })
            this.markers.push(marker);
        }
    }

    closeAllInfoWindows() {
        this.markers.forEach(marker => {
            marker.infoWindow.close();
        })
    }

    setMarkers() {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(this.map);
        };
    }

    clearMarkers() {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        };
    };

    generateHeatMap() {
        if (!this.props.pins) return;
        if (this.props.pins.length === this.HeatMarkers.length) return;

        let newPins = this.props.pins;
        let length = this.HeatMarkers.length;
        for (let i = newPins.length - 1; i >= length; i--) {
            this.HeatMarkers.push(new window.google.maps.LatLng(newPins[i].lat, newPins[i].long))
        }

        if (this.heatmap) {
            this.heatmap.setData(this.HeatMarkers)
        } else {
            this.heatmap = new window.google.maps.visualization.HeatmapLayer({
                data: this.HeatMarkers
            });
        }

        // set settings on new creation of heatmap
        this.heatmap.set("gradient", gradient);
    }

    placeMarker(location) {
        this.map.setOptions({ draggableCursor: '' }); //changes cursor back to normal on placement

        this.marker = new window.google.maps.Marker({
            position: location,
            map: this.map
        });

        this.setState({
            formOpen: true,
            lat: location.lat(),
            lng: location.lng(),
        })
        document.addEventListener("mousedown", this.handleClickOutsideForm);
        window.google.maps.event.removeListener(this.map_key);
        this.map_key = null;
    }

    toggleReportListener(e) {
        if (this.map_key) return;
        this.map.setOptions({ draggableCursor: 'crosshair' }); //changes cursor on toggle

        this.map_key = window.google.maps.event.addListener(this.map, 'click', (event) => {
            this.placeMarker(event.latLng);
        });
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    handleClickOutsideForm = (event) => {
        if (this.logContainer.current && !this.logContainer.current.contains(event.target)) {
            this.setState({
                formOpen: false,
            });
            this.marker.setMap(null);
        }
    }

    changeRadius(value) {
        if (!this.radius) this.radius = 10;
        this.radius += value;
        this.heatmap.set("radius", this.radius);
    }

    changeZoom(value) {
        if (!this.zoom) this.zoom = 13;
        this.zoom += value;
        this.changeMapType();
    }

    changeOpacity(value) {
        if (!this.opacity) this.opacity = 0.6;
        this.opacity += value;
        if (this.opacity < 0) this.opacity = 0;
        if (this.opacity > 1) this.opacity = 1;
        this.heatmap.set("opacity", this.opacity);
    }

    render() {
        this.generateNewSeeds();

        let clickedPin;
        if(this.state.clickedPin){
            console.log(this.state.clickedPin)
            clickedPin = <div>
                <div>{this.state.clickedPin.category}</div>
                <div>{this.state.clickedPin.description}</div>
                <div>{this.state.clickedPin.lat}</div>
                <div>{this.state.clickedPin.long}</div>
            </div>
        } else {
            clickedPin = <div></div>
        }

        let incidentButton;
        if (this.props.loggedIn) {
            incidentButton = <button id="add-incident" onClick={this.toggleReportListener}>Report Incident</button>
        } else {
            incidentButton = <button id="add-incident" onClick={() => this.props.openModal('login')}>Report Incident</button>
        }

        return (
            <div>
                {this.state.formOpen && (
                    <div ref={this.logContainer} className='pin-form'>
                        <PinFormContainer lat={this.state.lat} long={this.state.lng} />
                    </div>
                )}

                <div>{clickedPin}</div>

                <div id="floating-panel">
                    <div>
                        <div>Change Zoom </div>
                        <button onClick={() => this.changeZoom(-1)}>-</button>
                        <button onClick={() => this.changeZoom(1)}>+</button>
                    </div>
                    <div>
                        <div>Change Radius </div>
                        <button onClick={() => this.changeRadius(-1)}>-</button>
                        <button onClick={() => this.changeRadius(1)}>+</button>
                    </div>
                    <div>
                        <div>Change Opacity </div>
                        <button onClick={() => this.changeOpacity(-0.05)}>-</button>
                        <button onClick={() => this.changeOpacity(0.05)}>+</button>
                    </div>
                    {/* <button id="add-incident" onClick={this.toggleReportListener}>Report Incident</button> */}
                    {incidentButton}
                </div>
                <div id="map" />
            </div>
        )
    }

    errors(Status) {
        if (Status === Status.LOADING) return <h3>{Status} ..</h3>;
        if (Status === Status.FAILURE) return <h3>{Status} ...</h3>;
        return null;
    };

}

export default Map;