import React, { Component } from "react";

import ArtistBox from "./ArtistBox";
import Paginator from "./Paginator";
import TripBox from "./TripBox";
import TripListItem from "./TripListItem";

class TripList extends Component {
  render() {
    const { trips } = this.props.trips;
      console.log("SOY UN TRIP LIST");

      console.log(this);
      console.log(this.props.trips);
      // const artists = null; // para forzar error y ver que se handlea
    //return artists.map(artist => <ArtistBox key={artist.id} artist={artist} />);
    return (
      <Paginator
        items={this.props.trips}
        pageSize={5}
        renderItem={trip => <TripListItem trip={trip} />}
      />
    );
  }
}

export default TripList;
