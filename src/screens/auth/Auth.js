import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {isEmail, generateToken} from '../../../utils/helper';

// colors
import {colors} from '../../styles/colors';

// libs & deps
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import useForm from '../../hooks/useForm';
import {connect} from 'react-redux';
import {login} from '../../redux/reducers/auth/actions';

const Auth = ({navigation, /* data, */ login}) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const initialForm = {name: '', surname: '', email: '', age: '', agreeTerms: false};

  const onSubmit = async (val) => {
    let token = generateToken();
    val['token'] = token;
    login(val);

      AsyncStorage.setItem('token', JSON.stringify(token))
        .then(() => navigation.navigate('Home'))
        .catch((err) => {
          return alert(err);
        });
  };

  const [suscribe, values, handleSubmit] = useForm(initialForm, onSubmit);

  const {name, surname, email, age, agreeTerms} = values;


  React.useEffect(() => {
    let fields = Object.values(values);
    setIsDisabled(fields.includes('') || !isEmail(email) || !agreeTerms ? true : false);
  }, [values, agreeTerms])

  return (
    <ImageBackground
      source={require('../../../assets/general/bc_inicio.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="cover">
        
      <View style={styles.container}>
        <TextInput
          name="name"
          value={name}
          onChangeText={suscribe('name')}
          autoCompleteType="off"
          placeholder="Name"
          placeholderTextColor={colors.WHITE}
          style={styles.input}
        />
        <TextInput
          name="surname"
          value={surname}
          onChangeText={suscribe('surname')}
          autoCompleteType="off"
          placeholder="Surname"
          placeholderTextColor={colors.WHITE}
          style={styles.input}
        />
        <TextInput
          name="email"
          autoCapitalize="none"
          value={email}
          onChangeText={suscribe('email')}
          placeholder="Email"
          placeholderTextColor={colors.WHITE}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          keyboardType="numeric"
          name="age"
          value={age}
          onChangeText={suscribe('age')}
          placeholderTextColor={colors.WHITE}
          maxLength={3}
          style={styles.input}
        />
        <View style={styles.agreeTerms}>
          <CheckBox
            name="acceptTerms"
            disabled={false}
            onValueChange={suscribe('agreeTerms')}
            value={agreeTerms}
          />
          <Text style={{color: colors.WHITE}}>Agree terms and conditions</Text>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={[styles.sendButton, isDisabled && {opacity: 0.6}]}
            onPress={handleSubmit}
            disabled={isDisabled}>
            <Text style={{fontSize: 20, color: colors.WHITE}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {data: state.auth};
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  // logout: (data) => dispatch(logout(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    color: colors.WHITE,
    alignSelf: 'stretch',
    margin: 6,
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.WHITE,
  },
  containerButton: {
    alignSelf: 'stretch',
  },
  sendButton: {
    backgroundColor: colors.STRONG_BLUE,
    height: 48,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  agreeTerms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
