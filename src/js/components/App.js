'use strict';

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reakka from './Reakka';

const reducer = function (state={count: 0}, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { count : state.count + 1};
  case 'DECREMENT':
    return { count : state.count - 1};
  default:
    return state;
  }
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Reakka />}
      </Provider>
    );
  }
}
