import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Loader} from '../../components/index';

export default ({navigation}) => {
  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      AsyncStorage.getItem('token').then((x) =>
        navigation.navigate(x ? 'Root' : 'OnBoarding'),
      );
    }

    // cleanup effect
    return () => (isMounted = false);
  }, []);

  return <Loader />;
};
