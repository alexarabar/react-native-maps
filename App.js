import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
        region={{
          latitude: -22.9738,
          longitude: -43.211,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation
      />
    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',

  },
  
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

});
