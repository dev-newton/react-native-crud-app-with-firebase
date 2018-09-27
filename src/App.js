import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDjQkrjDhx_dz8tiXR3ALD3aE4fBYWez8M',
    authDomain: 'manager-cd86a.firebaseapp.com',
    databaseURL: 'https://manager-cd86a.firebaseio.com',
    projectId: 'manager-cd86a',
    storageBucket: '',
    messagingSenderId: '1039140677753'
  };
  firebase.initializeApp(config);
  }
 
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
