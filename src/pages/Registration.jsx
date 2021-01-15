import React from 'react'
import { Link } from "react-router-dom";

export default function Registration({setGlobalPlayerName}) {
    let localPlayerName;
    return (
        <div>
            <input 
                type="text"
                placeholder="Player Name"
                onChange={(event) => {localPlayerName = event.target.value}}
            />
              <Link to="/app" onClick={() => setGlobalPlayerName(localPlayerName)}>Login</Link>
        </div>
    )
}
