import React, {Component} from "react";
import {connect} from "react-redux";

import StarRatingComponent from 'react-star-rating-component';
import TextWithIcon from "./TextWithIcon";
import ArtistImage from "./ArtistImage";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const priceIconUrl = "https://image.flaticon.com/icons/png/512/1724/1724251.png";
const durationIconUrl = "https://image.flaticon.com/icons/png/512/1680/1680110.png";
const commentIconUrl = "https://image.flaticon.com/icons/png/512/1276/1276476.png";

class TripListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

            driver: {}
        };
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {

        const formatArtistData = ({
                                      id, name,
                                      images,
                                      photo_url, licensenumber, carcolour, license_photo_url, car_plate_photo_url, status,
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


        fetch("https://correapp-api.herokuapp.com/drivers/" + this.props.trip.driver_id)
            .then(function (response) {
                console.log("RESPONSE DRICVER");
                console.log(response);
                return response.json();
            })
            .then(function (driver) {
                console.log("PARSEADO");

                console.log(driver);
                return formatArtistData(driver);
            })
            .then(function (jsonStr) {
                console.log("FROMATEOADE");
                console.log("HOLAAr");

                console.log(jsonStr);
                console.log(jsonStr);
                console.log("HOLAAr");
                return jsonStr;
            }).then(res => this.setState({driver: res}));
    }


    render() {
        console.log("Soy un TripListItem");
        const {driver} = this.state;
        const {
            imageUrl, name, followersCount, address,
            dni, carlicenseplate, genres, rating, car, status, telephone
        } = driver;
        console.log(this.props);
        console.log(this.state);

        return (
            <div className="TripListItem">
                {/*<h1>{this.props.id} </h1>*/}
                <div className="ArtistBox">


                    <ArtistImage source={this.state.driver != null ? imageUrl : ''} favorited={false}/>
                    <h3>{this.state.driver != null ? name : ''}</h3>


                    <h4 style={{marginBottom: 25}}>{car}</h4>
                    <h4 style={{marginBottom: 25}}>{carlicenseplate}</h4>
                    <h4 style={{marginBottom: 25}}>{telephone}</h4>

                    <h3>{"Origen: " + this.props.trip.source.lat + ", " + this.props.trip.source.long}</h3>
                    <h3>{"Destino: " + this.props.trip.destination.lat + ", " + this.props.trip.destination.long}</h3>

                    <Link to={"/trips/" + this.props.trip.id}>
                        <button id="b1">
                            Seguir viaje
                        </button>
                    </Link>
                </div>

                {/*<TextWithIcon*/}
                {/*text={"$ " + Number(this.props.price).toFixed(2)}*/}
                {/*iconUrl={priceIconUrl}*/}
                {/*style={{marginBottom: 25}}*/}
                {/*/>*/}
                {/*<TextWithIcon*/}
                {/*text={this.props.duration > 3600 ? Math.floor(this.props.duration / 360) + " horas" : Math.floor(this.props.duration / 60) + " minutos "}*/}
                {/*//text={Math.floor(this.props.duration / 60) + " minutos"}*/}
                {/*iconUrl={durationIconUrl}*/}
                {/*style={{marginBottom: 25}}*/}
                {/*/>*/}

                {/*<TextWithIcon*/}
                {/*text={this.props.viaje.driver_rating != null ? this.props.viaje.driver_rating.comment : "Comentario"}*/}
                {/*iconUrl={commentIconUrl}*/}
                {/*style={{marginBottom: 25}}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default TripListItem;
