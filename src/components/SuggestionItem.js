import React from 'react';
import {View, Image, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default ({title, imageUrl, handlePress}) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              imageUrl === null
                ? 'https://cdn2.iconfinder.com/data/icons/books-16/27/books011-512.png'
                : imageUrl,
          }}
          style={{width: 40, height: 40, borderRadius: 40 / 2}}
        />
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 3,
    borderColor: '#00aded',
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    alignContent: 'center',
    height: 110,
    width: 150,
    borderRadius: 6,
  },
});
