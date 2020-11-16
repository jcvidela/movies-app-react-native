import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default ({handleChange}) => {
  return (
    <TextInput
      onChangeText={handleChange}
      style={styles.input}
      placeholder="Search"
      autoCapitalize="none"
      autoCompleteType="off"
      autoFocus
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 270,
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 16,
  },
});
