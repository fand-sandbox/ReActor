'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CountActions from '../actions/Count';

import io from 'socket.io-client';

@connect(state => {
  return {
    count : state.count
  };
})
class ReAkka extends Component {

  componentDidMount () {
    const s = io.connect('http://localhost:3000');
    s.on('connect', () => {
      setTimeout(() => {
        s.disconnect();
      }, 1000);
    });
  }

  render () {
    const { count, dispatch } = this.props;
    const actions   = bindActionCreators(CountActions, dispatch);
    return (
      <ul className="Reakka">
        <li>count : {count}</li>
        <li><button onClick={actions.increment}>++</button></li>
        <li><button onClick={actions.decrement}>--</button></li>
      </ul>
    );
  }

}


export default ReAkka;
