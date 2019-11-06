import React from "react";

const styles = {
  container: {
    position: "absolute" as const,
    top: 20,
    left: 0,
    right: 0
  }
};

type Props = {
  label: string;
  color?: string;
};

export const Title = ({ label, color = "black" }: Props) => (
  <div style={styles.container}>
    <h2 style={{ color, textAlign: "center" }}>{label}</h2>
  </div>
);
