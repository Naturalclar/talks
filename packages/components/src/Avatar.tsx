import React from "react";

export const Avatar = () => (
  <img
    src={require("file-loader!./assets/cat-icon.jpg")}
    height="120"
    width="120"
    style={{ borderRadius: 60 }}
  />
);
