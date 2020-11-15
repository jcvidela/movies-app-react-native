import React from 'react';
import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';

export default ({children}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/general/bc_navbar.png')}
        style={styles.image}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 120,
  },
});
