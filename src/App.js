import { useState } from 'react';
import './App.css';
import Player from 'components/Player';
import AskPopup from 'components/AskPopup/AskPopup';
import { getCard } from 'features/deck';
import Alert from 'components/Alert/Alert';


function App() {
  // Model Section
  const [player1Sum, setPlayer1Sum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);
  const [isDealerTurnEnd, setIsDealerTurnEnd] = useState(false);

  // Controller Section
  const changeStatus = () => {
    setIsDealerTurnEnd(true);
  };
  const takeCard = () => setPlayer1Sum(player1Sum + getCard());
  const dealerTurn = () => {
    let dealerSumLocal = dealerSum;
    while (dealerSumLocal < player1Sum && dealerSumLocal <= 21) {
      dealerSumLocal += getCard();
    }
    setDealerSum(dealerSumLocal);
    changeStatus();
  }

  // View Section
  return (
    <div className="App">
      <AskPopup userSum={player1Sum} takeCard={takeCard} endTurn={dealerTurn} />
      <Player name='Player1' score={player1Sum} />
      <Player name='Dealer' score={dealerSum} />
      {isDealerTurnEnd && <Alert dealerSum={dealerSum} userSum={player1Sum} />}
    </div>
  );
}

export default App;
