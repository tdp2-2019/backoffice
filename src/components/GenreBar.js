import React, { Component } from "react";

import GenreModal from "./GenreModal";

class GenreBar extends Component {
  state = {
    isModalVisible: false
  };

  toggleGenreModal = evt => {
    evt.preventDefault();
    this.setState(state => ({ isModalVisible: !state.isModalVisible }));
  };

  render() {
    const { genres, artistName } = this.props;
    const { isModalVisible } = this.state;
    const hasMoreGenres = genres.length > 0;

    return (
      <div className="GenreBar">
        {genres[0] || "No genre info"}
        {hasMoreGenres && (
          <button onClick={this.toggleGenreModal}>...more</button>
        )}
        {isModalVisible && (
          <GenreModal
            title={`Genres of ${artistName}`}
            genres={genres}
            onCloseRequested={this.toggleGenreModal}
          />
        )}
      </div>
    );
  }
}

export default GenreBar;
