import React from "react";
import { Avatar } from "./Avatar";

const styles = {
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
  },
  list: {
    listStyleType: "none",
  },
  name: {
    fontSize: 36,
    fontWeight: 700,
  },
  company: {
    fontSize: 30,
    marginBottom: "24px",
  },

  listItemSub: {
    fontSize: 20,
    marginBottom: "8px",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
} as const;

export const Profile = () => (
  <div>
    <div style={styles.line} />
    <div style={styles.content}>
      <Avatar />
      <ul style={styles.list}>
        <li style={styles.name}>Jesse Katsumata</li>
        <li style={styles.company}>Engineer at stand.fm</li>
        <li style={styles.listItemSub}>Member of:</li>
        <li style={styles.listItemSub}>- React Native Community</li>
        <li style={{ ...styles.listItemSub, marginBottom: 24 }}>
          - React Native JP
        </li>

        <li style={styles.listItemSub}>
          <a href="https://twitter.com/natural_clar">Twitter: @natural_clar</a>
        </li>
        <li style={styles.listItemSub}>
          <a href="https://github.com/Naturalclar">Github: @Naturalclar</a>
        </li>
      </ul>
    </div>
    <div style={styles.line} />
  </div>
);
