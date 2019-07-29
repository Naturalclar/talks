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
      <li style={styles.company}>Engineer at CureApp, Inc.</li>
      <li style={styles.listItemSub}>React, React-Native, TypeScript, Node</li>
      <li style={styles.listItemSub}>
        <a href="https://twitter.com/natural_clar">Twitter: @natural_clar</a>
      </li>
      <li style={styles.listItemSub}>
        <a href="https://github.com/Naturalclar">Github: @Naturalclar</a>
      </li>
    </ul>
    <div style={styles.line} />
  </div>
);

export default Profile;
