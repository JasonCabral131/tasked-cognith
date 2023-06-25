import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';
import {fontSize} from '../fixture/fonts';
import {Colors} from '../fixture/colors';

export class Loader extends Component {
  render() {
    return (
      <View style={styles.container} testID='loader-container'>
        <LottieView
          source={require('./../assets/lottie/astronaut-holds-flag-with-alien.json')}
          style={{height: 220, width: 220, alignSelf: 'center'}}
          loop
          autoPlay
          testID="lottie-view"
        />
        <Text testID="loading" style={styles.text}>
          Loading...
        </Text>
      </View>
    );
  }
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    marginTop: 6,
    fontSize: fontSize.lg,
    textAlign: 'center',
  },
});
