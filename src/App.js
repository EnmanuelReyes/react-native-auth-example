import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBcLtFjDA1c1bgUj_WTN6g25iNnmLj-KO4',
      authDomain: 'authentication-23725.firebaseapp.com',
      databaseURL: 'https://authentication-23725.firebaseio.com',
      projectId: 'authentication-23725',
      storageBucket: 'authentication-23725.appspot.com',
      messagingSenderId: '67268248704'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
