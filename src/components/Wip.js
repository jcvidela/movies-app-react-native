import React from 'react';
import {View, Image} from 'react-native';

export default () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/general/building.jpg')}
        style={{width: '100%', height: '80%'}}
      />
    </View>
  );
};
