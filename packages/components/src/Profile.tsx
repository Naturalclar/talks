import React from "react";

const styles = {
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "white"
  },
  list: {
    listStyleType: "none"
  },
  name: {
    fontSize: 30
  },
  company: {
    fontSize: 24
  },

  listItemSub: {
    fontSize: 20
  }
};

const Profile = () => (
  <div>
    <div style={styles.line} />
    <ul style={styles.list}>
      <li style={styles.name}>Jesse Katsumata</li>
      <li style={styles.company}>CureApp, Inc.</li>
      <li style={styles.listItemSub}>React, React-Native, TypeScript, Node</li>
    </ul>
    <div style={styles.line} />
  </div>
);

export default Profile;
