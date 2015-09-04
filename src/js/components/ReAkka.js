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
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('connect', () => console.log('>>>>> conn'));
    this.socket.on('disconnect', () => console.log('>>>>> disconn（◞‸◟）'));
    this.socket.on('increment', () => console.log('## inc'));
    this.socket.on('decrement', () => console.log('## dec'));
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
