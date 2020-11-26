import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../src/redux/reducers/auth/actions';

const Settings = ({navigation, logout}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 100}}>
        <Button
          title="Log out"
          onPress={() => {
            logout(), navigation.navigate('OnBoarding');
          }}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
