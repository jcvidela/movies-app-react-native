import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.LIGHTBLUE} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
