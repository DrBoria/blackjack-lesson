import Alert from 'components/Alert/Alert'
import AskPopup from 'components/AskPopup/AskPopup'
import Player from 'components/Player/Player'
import React from 'react'
import { connect } from 'react-redux';
import styles from './App.module.scss';

function AppPage({players, isDealerTurnEnd, takeCard, endTurn, dealerSum, favoriteUsers}) {
    return (
        <div>
          <div style={{backgroundColor: '#969696'}}>
             {players.map(player => (
              <div className={styles.userContainer}>
                <Player name={player.name} score={player.sum} />
                <AskPopup userSum={player.sum} takeCard={() => takeCard(player.name)} endTurn={() => endTurn(player.name)} />
              </div>
            ))}
            </div>
            <Player name='Dealer' score={dealerSum} />
            {isDealerTurnEnd && <Alert dealerSum={dealerSum} users={favoriteUsers} />}
        </div>
    )
}

const mapStateToProps = state => ({
  players: state.players
})

export default connect(
  mapStateToProps
)(AppPage);