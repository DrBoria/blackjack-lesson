import { decrement, increment } from "actionCreators/counter";
import React from "react";
import { connect } from "react-redux";
import styles from "./AskPopup.module.scss";

function AskPopup({ userSum, takeCard, endTurn, increment, decrement }) {
  return (
    <div className={styles.cardContainer}>
      Сумма ваших карт {userSum}, хотите взять ещё?
      <div>
        <button onClick={takeCard}>Да</button>
        <button onClick={endTurn}>Нет</button>
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(() => {}, mapDispatchToProps)(AskPopup);
