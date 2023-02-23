import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Stats from './Stats';
import StopWatch from './StopsWatch';


const Header = ({players, title}) => {
  return (
    <header>
    <Stats players={players} />
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}



Header.defaultProps = {
    title: 'Scoreboard'
    
}
export default Header;