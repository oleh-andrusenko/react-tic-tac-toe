import React from "react"
import { useState } from "react"
function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
    if (isEditing) onChangeName(symbol, playerName)
  }
  function handleNameChange(e) {
    setPlayerName(e.target.value)
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            value={playerName}
            required
            onChange={handleNameChange}
          />
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  )
}

export default Player
