import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default ({navigation}) => {
  React.useEffect(() => {
    let isMounted = true;
    AsyncStorage.getItem('token').then(
      (x) => isMounted && navigation.navigate(x ? 'Root' : 'OnBoarding'),
    );

    // cleanup effect
    return () => (isMounted = false);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
