import Player from 'components/Player';
import React from 'react';

export default function SideBar() {
    return (
        <div style={{backgroundColor: "blue", height: "150px"}}>
            SideBar
            <Player name={'BOB'} />
        </div>
    )
}
