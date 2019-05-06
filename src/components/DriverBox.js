import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleArtistAsFavorite} from "../store/actions/favorites";

import TripBox from "./TripBox";
import ArtistImage from "./ArtistImage";
import TextWithIcon from "./TextWithIcon";
import GenreBar from "./GenreBar";
import {isFavorite} from "../store/selectors";
import StarRatingComponent from 'react-star-rating-component';
import DriverScreen from "../screens/DriverScreen";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import licenseIconUrl from '../driver-license-icon.jpg';
import patente from '../patente.png'

const followersIconUrl =
    "https://image.flaticon.com/icons/png/512/747/747835.png";


class DriverBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            viajes: [],
            confirmado : this.props.artist.status
        };
    }

    componentDidMount() {


        console.log(this.props);
        if(this.props.artist.id == null){
            console.log("Nulleable");
        } else {
            fetch("https://correapp-api.herokuapp.com/trips?status=finished&driver_id=" + this.props.artist.id)
                .then(response => response.json())
                .then(trips => {
                    console.log(trips);
                    console.log(trips.length);
                    this.setState({
                        viajes: trips
                    });
                }).catch(() => {
                console.log("error");
                this.setState({
                    viajes: []
                })
            });
        }
    }


    try = () => {
        console.log(this.props.artist);
        return (
            <Link to={"/" + this.props.artist.id}>
                <button id="b1">
                    Click me
                </button>
            </Link>
            );
    }

    render() {
        const {artist, favorited, toggleFavorite} = this.props;
        const {
            imageUrl, name, followersCount, address,
            dni, carlicenseplate, genres, rating, car, car_plate_photo_url, license_photo_url, status
        } = artist;
        console.log("Rendereo");
        return (
           <div>
               <div className="Driver-profile">
                    <ArtistImage source={imageUrl} favorited={this.state.confirmado !== "No confirmado"}/>
                    <h3>{name}</h3>
                    <StarRatingComponent
                        starCount={5}
                        value={rating ? rating : 0}
                    />
                    <TextWithIcon
                        text={`${this.state.viajes.length != null ? this.state.viajes.length : 0} viajes realizados`}
                        iconUrl={followersIconUrl}
                        style={{marginBottom: 25}}
                    />
                    {/*<h4 style={{marginBottom: 25}}>{car}</h4>*/}

                   <TextWithIcon
                        text={"Licencia de conducir"}
                        iconUrl={licenseIconUrl}
                        style={{marginBottom: 25}}
                   />
                   <div className="fill image-driver-profile"><img src={license_photo_url} alt="No ingresado" width="250" height="250" /></div>

                   <TextWithIcon
                       text={"Patente del auto"}
                       iconUrl={patente}
                       style={{marginBottom: 25}}
                   />
                   <div className="fill image-driver-profile"><img src={car_plate_photo_url}  alt="No ingresado"  width="250" height="250" /></div>
                   <Link to={"/" + this.props.artist.id}>
                       <button id="b1" onClick={this.handleConfirm}>
                           {this.state.confirmado === "No confirmado" ? "Confirmar registro" : "Deshabilitar"}
                       </button>
                   </Link>
               </div>
               <div className="Driver-trips">
                   <h3>Viajes</h3>
                   {this.rendertrips(this.state.viajes)}
               </div>
           </div>
    );
    }

    rendertrips = (viajes) => {
        let result = [];
        console.log(viajes);
        for (let i = 0; i < viajes.length; i++) {
          result.push(<TripBox
              key={viajes[i].id}
              client={viajes[i].client}
              price={viajes[i].price}
              duration={viajes[i].duration}
              rating={viajes[i].rating}
              comment={viajes[i].comment}
              viaje={viajes[i]}
              />)
        }
        return result;
    }

    handleConfirm =() => {
        var data = {status:"Confirmado"};
        if(this.state.confirmado !== "No confirmado"){
            data = {status: "No confirmado"};
        }
        console.log(data);
        //fetch('http://127.0.0.1:5000/drivers/' + this.props.artist.id, {
            fetch('https://correapp-api.herokuapp.com/drivers/' + this.props.artist.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
                console.log(this.state);
                console.log("Cambie el state");
                this.setState({confirmado: data.status});
                console.log(this.state);
            });
    }
}

const mapStateToProps = (state, ownProps) => {
    const {artist} = ownProps;

    return {
        favorited: isFavorite(state, artist.id)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {artist} = ownProps;
    return {
        toggleFavorite: () => dispatch(toggleArtistAsFavorite(artist.id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DriverBox);
