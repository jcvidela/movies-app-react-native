import React from 'react';
import {TouchableOpacity} from 'react-native';

export default ({children, handlePress}) => {
  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};
