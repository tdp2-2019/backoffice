import React from "react";

function TextWithIcon({ text, iconUrl, style }) {
  return (
    <span className="TextWithIcon" style={style}>
      <img src={iconUrl} alt={text} />
      {text}
    </span>
  );
}

export default TextWithIcon;
