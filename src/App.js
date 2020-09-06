/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { FormattedMessage } from 'react-intl';

const App = props => {
  console.log(props);
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text>
        <FormattedMessage id="prueba" />
      </Text>
    </View>
  );
};

export default App;
