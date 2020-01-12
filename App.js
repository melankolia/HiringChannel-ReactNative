import React, {Component} from 'react';
import Router from './src/Router/Index';
import {Provider} from 'react-redux';
import store from './src/Redux/store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
