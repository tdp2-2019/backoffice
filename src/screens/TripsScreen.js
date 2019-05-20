import React, {Component} from "react";

import Screen from "./Screen";



import TripList from "../components/TripList";

class TripsScreen extends Component {

    constructor() {
        super();

        this.state = {

            trips: []

        };
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
        fetch("https://correapp-api.herokuapp.com/trips?status=started")
            .then(function (response) {
                console.log("RESPONSE");

                console.log(response);
                return response.json();
            })
            .then(function (trips) {
                console.log("PARSEADO");

                console.log(trips);
                
                return trips.id ? trips.map(formatTripData) : [];
            })
            .then(function (jsonStr) {
                console.log("FROMATEOADE");
                console.log("HOLAAr");

                console.log(jsonStr);
                console.log(jsonStr);
                console.log("HOLAAr");
                return jsonStr;
            }).then(res => this.setState({trips: res}));
    }


    render() {
        // const isArtistsEmtpy = this.state.trips.length == 0;
        console.log("SOY UN TRIPSSCREEN");

        console.log(this.state.trips);
        console.log(this);
        // this.props.fetchTrips();
        // console.log(trips);
        // console.log(this);
        return (
            <Screen title="Viajes Online" showSearchBar>
                {this.state.trips.length == 0 ? <h2>No se encontraron viajes online</h2> :
                    <TripList trips={this.state.trips}/>}
                {/*{isArtistsEmtpy && <h2>No se encontraron viajes online</h2>}*/}
                {/*{!isArtistsEmtpy && <TripList trips={this.state.trips} />}*/}
            </Screen>
        );
    }
}

export default (TripsScreen);


const formatTripData = ({
                            id,
                            source,
                            destination, driver_id, points, currentposition
                        }) => ({
    id,
    source,
    destination, driver_id, points, currentposition
});