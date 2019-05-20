import React from "react";

function ArtistBoxTextWithIcon({ text, iconUrl, style }) {
  return (
    <span className="ArtistBoxIcon" style={style}>
      <img src={iconUrl} alt={text} />
      {text}
    </span>
  );
}

export default ArtistBoxTextWithIcon;
