import { useState } from 'react';
import './App.css';
import Player from 'components/Player';
import AskPopup from 'components/AskPopup/AskPopup';
import { getCard } from 'features/deck';
import Alert from 'components/Alert/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from 'pages/Registration';

// Redux
import { decrement, increment } from 'actionCreators/counter';
import { connect } from 'react-redux';

function App({ count, increment, decrement }) {
  // Model Section
  const [player1Sum, setPlayer1Sum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);
  const [isDealerTurnEnd, setIsDealerTurnEnd] = useState(false);
  const [globalPlayerName, setGlobalPlayerName] = useState('Player Name');

  // Controller Section
  const changeStatus = () => {
    setIsDealerTurnEnd(true);
  };
  const takeCard = () => setPlayer1Sum(player1Sum + getCard());
  const dealerTurn = () => {
    let dealerSumLocal = dealerSum;
    while (player1Sum < 22 && dealerSumLocal < player1Sum && dealerSumLocal <= 21) {
      dealerSumLocal += getCard();
    }
    setDealerSum(dealerSumLocal);
    changeStatus();
  }
  const handleSetGlobalPlayerName = (name) => {
    setGlobalPlayerName(name);
  }
  console.log(count)
  // View Section
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ul>
        </nav>
        {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <Switch>
          <Route path="/app">
            <AskPopup userSum={player1Sum} takeCard={takeCard} endTurn={dealerTurn} />
            <Player name={globalPlayerName} score={player1Sum} />
            <Player name='Dealer' score={dealerSum} />
            {isDealerTurnEnd && <Alert dealerSum={dealerSum} userSum={player1Sum} />}
          </Route>
          <Route path="/">
            <Registration setGlobalPlayerName={handleSetGlobalPlayerName} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);