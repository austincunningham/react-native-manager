import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBUbH4ieuflo2czW6ckxd9BDipyUB8uY1g',
            authDomain: 'manager-77320.firebaseapp.com',
            databaseURL: 'https://manager-77320.firebaseio.com',
            projectId: 'manager-77320',
            storageBucket: 'manager-77320.appspot.com',
            messagingSenderId: '975013615591'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
