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
import DriverBox from "../components/DriverBox";

class DriverScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            driver: {},
        };
    }

    componentDidMount() {

        const {match: {params}} = this.props;
        console.log(this.props.match.params.driverId);

        fetch("https://correapp-api.herokuapp.com/drivers/" + this.props.match.params.driverId)
            .then(response => response.json())
            .then(driver => formatArtistData(driver))
            .then(driver => {
                console.log(driver);
                this.setState({
                    driver: driver
                });
            });
    }

    render() {
        return (
          <div className="Screen">
              <DriverBox key={this.state.driver.id} artist={this.state.driver} />
          </div>
        );

    }

}

const formatArtistData = ({
      id, name,
      images,
      photo_url, licensenumber, carcolour, license_photo_url, car_plate_photo_url,status,
      brand, carlicenseplate, address, dni, email, lastname, model, rating, signup_date, telephone
  }) => ({
    id,
    name: name + " " + lastname,
    car_plate_photo_url,
    license_photo_url,
    status,
    imageUrl: photo_url
        ? photo_url
        : `https://api.adorable.io/avatars/285/${id}`,
    followersCount: 0,
    genres: [],
    rating: rating,
    car: brand + " " + model + " " + carcolour,
    address: address,
    dni, carlicenseplate, email, signup_date, telephone
});


export default DriverScreen;
