import React, { Component } from "react";
import ReactDOM from "react-dom";

import { SettingsContext } from "../context";

const modalRoot = document.getElementById("modal-root");
const closeImageUrl =
  "https://atlona.com/wp-content/uploads/2016/08/close-button.png";
const closeImageLightUrl =
  "https://www.materialui.co/materialIcons/navigation/close_black_1024x1024.png";

class Modal extends Component {
  render() {
    const { theme } = this.context;
    const { title, onCloseRequested, children } = this.props;
    const isThemeLight = theme === "light";
    const themedCloseImageUrl = isThemeLight
      ? closeImageLightUrl
      : closeImageUrl;

    return ReactDOM.createPortal(
      <div className={`Modal ${theme}`}>
        <div className="Modal-box">
          <h2>{title}</h2>
          <img
            src={themedCloseImageUrl}
            onClick={onCloseRequested}
            className="Modal-close"
            alt="close button"
          />
          <div className="Modal-content">{children}</div>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.contextType = SettingsContext;
export default Modal;
