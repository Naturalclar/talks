import React from "react";

const styles = {
  container: {
    position: "absolute" as const,
    top: 20,
    left: 20,
  },
};

type Props = {
  label: string;
  color?: string;
};

export const Title = ({ label, color = "black" }: Props) => (
  <div style={styles.container}>
    <h2 style={{ color }}>{label}</h2>
  </div>
);
