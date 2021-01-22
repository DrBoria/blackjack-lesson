import React from "react";
import { connect } from "react-redux";
import styles from "./Player.module.scss";

function Player({ name, score, count }) {
  return (
    <div className={styles.userContainer}>
      <h1>{name}</h1>
      <h2>{count}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
});

export default connect(mapStateToProps)(Player);
