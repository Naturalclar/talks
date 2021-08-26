import * as React from "react";

export const Header: React.FC = ({ children }) => {
  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        background: "linear-gradient(135.73deg, #6346d7 1.23%, #f33682 100%)",
        display: "flex",
        paddingLeft: 24,
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "white" }}>{children}</h3>
    </header>
  );
};
