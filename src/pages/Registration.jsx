import { addPlayerActionCreator, updatePlayerNameActionCreator } from "actionCreators/players";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Registration({ addPlayer, players, updatePlayerName }) {
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li>
            <input
              type="text"
              placeholder="Player Name"
              onChange={(event) => {
                updatePlayerName(player.id, event.target.value);
              }}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addPlayer({ id: players.length, name: "", sum: 0, endTurn: false })
        }
      >
        +
      </button>

      <Link to="/app">Login</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  players: state.players,
});
const mapDispatchToProps = (dispatch) => ({
  addPlayer: (player) => dispatch(addPlayerActionCreator(player)),
  updatePlayerName: (playerId, playerName) => dispatch(updatePlayerNameActionCreator(playerId, playerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
