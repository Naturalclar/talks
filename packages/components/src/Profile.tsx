import React from "react";

const styles = {
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "white"
  },
  list: {
    listStyleType: "none"
  }
};

const Profile = () => (
  <div>
    <div style={styles.line} />
    <ul style={styles.list}>
      <li>Jesse Katsumata</li>
      <li>CureApp, Inc.</li>
      <li>Node.js, React, TypeScript</li>
    </ul>
    <div style={styles.line} />
  </div>
);

export default Profile;
