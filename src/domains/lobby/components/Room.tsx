import React from 'react';

interface RoomProps {
  creator: string,
  gameName: string,
  noOfPlayers: number,
  maxPlayers: number
}

class Room extends React.Component<RoomProps> {

  public static defaultProps = {
    creator: 'Creator',
    gameName: 'GameName',
    noOfPlayers: 1,
    maxPlayers: 10
  }

  render() {
    const { creator, gameName, noOfPlayers, maxPlayers } = this.props
    return(
      <div>
        <label>{ creator }</label>
        <label>{ gameName }</label>
        <label>{ noOfPlayers }</label>
        <label>{ maxPlayers }</label>
      </div>
    )
  }
}

export default Room
