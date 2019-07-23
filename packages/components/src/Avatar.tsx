import React from "react";

const Avatar = () => (
  <img
    src={require("file-loader!./assets/cat-icon.jpg")}
    height="150"
    width="150"
    style={{ borderRadius: 75 }}
  />
);

export default Avatar;
