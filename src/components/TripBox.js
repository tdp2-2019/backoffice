import React, {Component} from "react";
import {connect} from "react-redux";

import StarRatingComponent from 'react-star-rating-component';
import TextWithIcon from "./TextWithIcon";

const priceIconUrl = "https://image.flaticon.com/icons/png/512/1724/1724251.png";
const durationIconUrl = "https://image.flaticon.com/icons/png/512/1680/1680110.png";
const commentIconUrl = "https://image.flaticon.com/icons/png/512/1276/1276476.png";

class TripBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="TripBox">
             <p className="client">{this.props.client}</p>
             <TextWithIcon
                 text={"$ " + this.props.price}
                 iconUrl={priceIconUrl}
                 style={{marginBottom: 25}}
             />
             <TextWithIcon
                 text={Math.floor(this.props.duration / 60) + ":" + this.props.duration % 60 + " hs."}
                 iconUrl={durationIconUrl}
                 style={{marginBottom: 25}}
             />
             <StarRatingComponent
                 starCount={5}
                 value={this.props.viaje.driver_rating != null ? this.props.viaje.driver_rating.rating : 0}
             />
             <TextWithIcon
                 text={this.props.viaje.driver_rating != null ? this.props.viaje.driver_rating.comment : "Comentario"}
                 iconUrl={commentIconUrl}
                 style={{marginBottom: 25}}
             />
           </div>
       );
    }
}

export default TripBox;
