import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View, Quote} from 'react-native';

import bgSrc from '../images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Image source={bgSrc} style={styles.picture} />
        <View style={styles.container}>
            {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  container: {
      position: 'absolute',
      top: 150,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
