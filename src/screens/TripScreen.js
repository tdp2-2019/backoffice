import React, {Component} from "react";
import {connect} from "react-redux";

import Screen from "./Screen";
import ArtistList from "../components/ArtistList";

import {fetchArtists, receiveArtists} from "../store/actions/artists";
import {fetchDriverById} from "../store/actions/artists";

import {
    getArtistsList,
    getSearchText,
    getFavoritesCount,
    getFilteredArtists,
    isFetchingArtists
} from "../store/selectors";
import ArtistBox from "../components/ArtistBox";
import DriversList from "../components/DriversList";
import Header from "../components/Header";
import MyGoogleMap from "../components/MyGoogleMap";
import {Link} from "react-router-dom";

class TripScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trip: {},
        };
    }

    componentDidMount() {

        const {match: {params}} = this.props;
        console.log(this.props.match.params.tripId);

        fetch("https://correapp-api.herokuapp.com/trips/" + this.props.match.params.tripId)
            .then(response => response.json())
            .then(trip => formatTripData(trip))
            .then(trip => {
                console.log(trip);
                this.setState({
                    trip: trip
                });
            });
        this.interval = setInterval(() => this.tick(), 8000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        fetch("https://correapp-api.herokuapp.com/trips/" + this.props.match.params.tripId)
            .then(response => response.json())
            .then(trip => formatTripData(trip))
            .then(trip => {
                console.log(trip);
                this.setState({
                    trip: trip
                });
            });
    }


    render() {
        const center = {
            center: {
                lat: this.state.trip.currentposition ? this.state.trip.currentposition.lat : -54.785,
                lng: this.state.trip.currentposition ? this.state.trip.currentposition.long : -80
            }
        }
        return (
            <div className="Screen">
                <Header title={"Viaje #" + this.state.trip.id}/>
                <MyGoogleMap defaultCenter={center}
                             positionLat={this.state.trip.currentposition ? this.state.trip.currentposition.lat : -54.785}
                             positionLng={this.state.trip.currentposition ? this.state.trip.currentposition.long : -80}/>
                {/*<DriversList artists={[this.state.driver]}/>*/}
                <Link to={"/trips/"}>
                    <button id="b1">
                        Volver
                    </button>
                </Link>
            </div>
        );

    }

}

const formatTripData = ({
                            id,
                            source,
                            destination, driver_id, points, currentposition
                        }) => ({
    id,
    source,
    destination, driver_id, points, currentposition
});

export default TripScreen;
