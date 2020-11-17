import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const logout = () => {
    AsyncStorage.removeItem('token').then((x) =>
      navigation.navigate('OnBoarding'),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{width: 100}}>
        <Button title="Log out" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
