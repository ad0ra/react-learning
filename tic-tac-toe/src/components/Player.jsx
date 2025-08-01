import { useState } from "react";

export default function Player({name, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);
    
    function handleClick() {
        setIsEditing((editing) => editing = !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let showPlayerName = ( <span className="player-name">{playerName}</span> );

    if (isEditing) {
        showPlayerName = (
            <input text="text" required value={playerName} onChange={handleChange} /> 
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {showPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}