import './App.css';
import Card from 'components/Card';
import Player from 'components/Player';
import './features/blackJack';
import AskPopup from 'components/AskPopup/AskPopup';

function App() {
  const handlePopupClick = (e) => console.log(e);

  return (
    <div className="App">
      <AskPopup userSum={12} takeCard={handlePopupClick} endTurn={handlePopupClick} />
      <Player name='bob' score={123} />

      <Card>5</Card>
    </div>
  );
}

export default App;
