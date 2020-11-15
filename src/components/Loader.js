import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {ACTIVITY_INDICATOR_COLOR} from '../styles/colors';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={ACTIVITY_INDICATOR_COLOR} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
