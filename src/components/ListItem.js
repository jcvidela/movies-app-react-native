import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    width: '95%',
    height: 100,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default ({title, imageUrl, desc, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={{ alignSelf: 'stretch' }}>
      <View style={styles.listItem}>
        <Image
          source={{
            uri: imageUrl === null ? 'https://cdn2.iconfinder.com/data/icons/books-16/27/books011-512.png' : imageUrl,
          }}
          style={{width: 60, height: 80, margin: 20}}
        />

        <View>
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
          <Text>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
