import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import Wallpaper from './Wallpaper';
import Logo from './Logo';
import Form from './Form';

export default class LoginScreen extends Component{

static navigationOptions = { title: 'Welcome', headerShown: false};

 render() {
    return (
      <Wallpaper>
        <Logo />

      </Wallpaper>
    );
  }
}
