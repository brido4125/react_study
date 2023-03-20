/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StompWS from 'react-native-stomp-websocket';

const App = () => {
  useEffect(() => {
    const client = StompWS.client('http://localhost:8080/ws/chat');
    client.debug = text => console.log(text);
    client.connect(
      {},
      function connectCallback(frame) {
        console.log('OK');
      },
      error => {
        console.log('Error');
      },
    );
  });
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default App;
