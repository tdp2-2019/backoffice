import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import TextWithIcon from "./TextWithIcon";

import { SettingsContext, themes } from "../context";

const artistIcon = "https://png.pngtree.com/svg/20170703/my_driver_515634.png";
const favoritesIcon =
  "https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-PNG.png";
const buttonStyle = {
  width: 100,
  marginBottom: 20
};

class Sidebar extends Component {
  handleOnChangeTheme = evt => {
    const { setTheme } = this.context;
    setTheme(evt.target.value);
  };

  render() {
    const { theme } = this.context;

    return (
      <nav className="Sidebar">
        <img
          src="https://d2rp9bqx0m7ihv.cloudfront.net/media/1/photos/products/109597/109597-9330725003224-01_1_g.png"
          alt="logo"
        />

        <NavLink
          to="/"
          exact
          className="Sidebar-item"
          activeClassName="Sidebar-selected"
        >
          <TextWithIcon
            text="Choferes"
            iconUrl={artistIcon}
            style={buttonStyle}
          />
        </NavLink>


        <div className="Settings">
          <span>Select a theme</span>
          <select onChange={this.handleOnChangeTheme} value={theme}>
            {Object.keys(themes).map(k => (
              <option key={k} value={k}>
                {themes[k]}
              </option>
            ))}
          </select>
        </div>
      </nav>
    );
  }
}

Sidebar.contextType = SettingsContext;
export default Sidebar;
