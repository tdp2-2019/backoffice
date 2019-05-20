import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import DriverImage from "./DriverImage";
import GoogleMarkerImage from "./GoogleMarkerImage";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MyGoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: -34.587239,
            lng: -58.440565
        },
        zoom: 13
    };

    constructor(props){
        super(props);
    }



    render() {
        console.log(this.props);
        const OPTIONS = {
            minZoom: 12,
            maxZoom: 15,
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '90%' }}>
                <GoogleMapReact
                    options={OPTIONS}
                    bootstrapURLKeys={{ key: "AIzaSyAY7UZsBUTxxPT0whr4tZgTz4v5PiwdffY" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={this.props.center}
                >
                    <GoogleMarkerImage
                        lat={this.props.positionLat}
                        lng={this.props.positionLng}
                        source="https://github.com/tdp2-2019/app-mobile/blob/master/Correapp/app/src/main/res/drawable/icon_dog_car.png?raw=true"
                    />
                </GoogleMapReact>
            </div>
        );
    }


}

export default MyGoogleMap;