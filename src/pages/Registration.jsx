import React from 'react';
import { Link } from "react-router-dom";

export default function Registration({ addPlayer, players, updatePlayerName }) {
    const handleAddPlayer = () => {
        addPlayer();
    }
    return (
        <div>
            <ul>
                {
                    players.map(
                        player =>
                            <li>
                                <input
                                    type="text"
                                    placeholder="Player Name"
                                    onChange={(event) => { updatePlayerName(player.id, event.target.value) }}
                                />
                            </li>
                    )
                }
            </ul>
            <button onClick={handleAddPlayer}>+</button>

            <Link to="/app">Login</Link>
        </div>
    )
}
