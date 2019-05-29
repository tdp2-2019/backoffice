import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleArtistAsFavorite} from "../store/actions/favorites";

import ArtistImage from "./ArtistImage";
import TextWithIcon from "./TextWithIcon";
import GenreBar from "./GenreBar";
import {isFavorite} from "../store/selectors";
import StarRatingComponent from 'react-star-rating-component';
import DriverScreen from "../screens/DriverScreen";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ArtistBoxTextWithIcon from "./ArtistBoxTextWithIcon";
import DriverImage from "./DriverImage";


const followersIconUrl =
    "https://image.flaticon.com/icons/png/512/747/747835.png";


class ArtistBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            viajes: 0,
        };
    }

    componentDidMount() {

        console.log(this.props);

        fetch("https://correapp-api.herokuapp.com/trips?status=finished&driver_id=" + this.props.artist.id)
            .then(response => response.json())
            .then(trips => {
                console.log(trips);
                console.log(trips.length);
                this.setState({
                    viajes: trips.length != null ? trips.length : 0
                });
            }).catch(() => {
                console.log("error");
                this.setState({
                        viajes: 0
                    }
                )
            });
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
            dni, carlicenseplate, genres, rating, car, status
        } = artist;

        console.log(status);
        return (
            <div className="ArtistBox">
                <ArtistImage source={imageUrl} favorited={status == "Confirmado"} blocked={status == "Bloqueado"}/>
                <h3>{name}</h3>
                <StarRatingComponent
                    starCount={5}
                    value={rating ? rating : 0}
                />
                <ArtistBoxTextWithIcon
                    text={`${this.state.viajes} viajes realizados`}
                    iconUrl={followersIconUrl}
                    style={{marginBottom: 25}}
                />
                <h4 style={{marginBottom: 25}}>{car}</h4>
                <h4 style={{marginBottom: 25}}>Activo</h4>

                <Link to={"/drivers/" + this.props.artist.id}>
                    <button id="b1">
                        Ver perfil
                    </button>
                </Link>

            </div>
        );
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
)(ArtistBox);
