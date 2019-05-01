import React, { Component } from "react";

import Modal from "./Modal";

class GenreModal extends Component {
  render() {
    const { genres = [], ...opts } = this.props;
    return (
      <Modal {...opts}>
        {genres.map(genre => (
          <span className="Genre-pill" key={genre}>
            {genre}
          </span>
        ))}
      </Modal>
    );
  }
}

export default GenreModal;
