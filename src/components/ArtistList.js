import React, { Component } from "react";

import ArtistBox from "./ArtistBox";
import Paginator from "./Paginator";

class ArtistList extends Component {
  render() {
    const { artists } = this.props;
    // const artists = null; // para forzar error y ver que se handlea
    //return artists.map(artist => <ArtistBox key={artist.id} artist={artist} />);
    return (
      <Paginator
        items={artists}
        pageSize={5}
        renderItem={artist => <ArtistBox key={artist.id} artist={artist} />}
      />
    );
  }
}

export default ArtistList;
