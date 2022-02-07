import React from 'react';

import { Container } from './styles'
 
function index() {
  return (
    <Container>
      <label htmlFor="switch">
        <input type="checkbox" id="switch" />
        <span className='slider'></span>
      </label>
    </Container>
  );
}

export default index;
