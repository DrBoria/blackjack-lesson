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
import AppPage from 'pages/AppPage';

function App({ count, increment, decrement }) {
  // Model Section
  const [players, setPlayers] = useState([]);
  const [dealerSum, setDealerSum] = useState(0);
  const [isDealerTurnEnd, setIsDealerTurnEnd] = useState(false);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  // Controller Section
  const showResult = () => { setIsDealerTurnEnd(true) };
  const isPlayersTurn = () => Boolean(players.filter(player => !player.endTurn).length)

  const dealerTurn = () => {
    if (isPlayersTurn()) return;

    let playerMaxValidSum = 0;
    players.forEach(player => {
      if (player.sum <= 21 && player.sum >= playerMaxValidSum) {
        playerMaxValidSum = player.sum;
      }
    });

    // set players who left - favorites
    setFavoriteUsers(
      players.filter(player => {
        if (player.sum === playerMaxValidSum) {
          return player
        }
      })
    );

    // Dealer turn
    let dealerSumLocal = dealerSum;
    while (playerMaxValidSum < 22 && dealerSumLocal < playerMaxValidSum && dealerSumLocal <= 21) {
      dealerSumLocal += getCard();
    }
    setDealerSum(dealerSumLocal);
    showResult();
  }

  const takeCard = (playerName) => {
    setPlayers(
      players.map(player => {
        if (player.name === playerName) {
          player.sum = player.sum + getCard()
        }
        return player
      })
    );
  }

  const endTurn = (playerName) => {
    setPlayers(
      players.map(player => {
        if (player.name === playerName) {
          player.endTurn = true
        }
        return player
      })
    );

    dealerTurn();
  }

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
            <AppPage isDealerTurnEnd={isDealerTurnEnd} takeCard={takeCard} endTurn={endTurn} dealerSum={dealerSum} favoriteUsers={favoriteUsers} />
          </Route>
          <Route path="/">
            <Registration />
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