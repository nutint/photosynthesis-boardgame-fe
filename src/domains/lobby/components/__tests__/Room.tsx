import React from 'react';
import { render } from '@testing-library/react';
import Room from '../Room';

describe('Room', () => {

  it('should contains correct props', () => {
    const { getByText } = render(
      <Room
        creator={'creator'}
        gameName={'gameName'}
        maxPlayers={ 10 }
        noOfPlayers={ 3 }/>)

    expect(getByText(/creator/)).toBeInTheDocument()
    expect(getByText(/gameName/)).toBeInTheDocument()
    expect(getByText(/10/)).toBeInTheDocument()
    expect(getByText(/3/)).toBeInTheDocument()
  })
  
})