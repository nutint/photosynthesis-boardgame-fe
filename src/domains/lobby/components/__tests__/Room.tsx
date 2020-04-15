import React from 'react';
import { render } from '@testing-library/react';
import Room from '../Room';

describe('Room', () => {

  it('should works', () => {
    const { getByText } = render(<Room />)
    const linkElement = getByText(/hello/)
    expect(true).toBe(true)
  })
  
})