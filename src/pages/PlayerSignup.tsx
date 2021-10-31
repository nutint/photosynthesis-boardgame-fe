import React from "react"

export const PlayerSignup: React.FC = (): React.ReactElement =>
  (<>
    <label>
      Player name:
      <input type="text" name="player-name"/>
    </label>
    <label>
      Player Color
      <select name="Player Color">
        <option value="red">Red</option>
      </select>
    </label>
  </>)