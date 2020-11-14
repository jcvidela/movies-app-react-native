import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {isEmail, generateToken} from '../../../utils/helper';

// colors
import {
  CONTAINER_BACKGROUND_COLOR,
  INPUT_FORM_BORDER_COLOR,
  SIGNIN_BUTTON_BACKGROUND_COLOR,
} from '../../styles/colors';

// libs & deps
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import useForm from '../../hooks/useForm';

export default ({navigation}) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const initialForm = {name: '', surname: '', email: '', age: ''};

  const onSubmit = async (val) => {
    try {
      // sign in
      let response = await axios.post(
        'http://192.168.100.224:3000/sign_in',
        val,
      );

      // generate and save token
      AsyncStorage.setItem('token', JSON.stringify(generateToken()))
        .then(() => navigation.navigate('Home'))
        .catch((err) => alert(err));
    } catch (error) {
      return alert('Error as an ocurred.');
    }
  };

  const [suscribe, values, handleSubmit] = useForm(initialForm, onSubmit);

  const {name, surname, email, age, agreeTerms} = values;

  // validations
  React.useEffect(() => {
    if (
      name === '' ||
      surname === '' ||
      !isEmail(email) ||
      age === '' ||
      !agreeTerms
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [values, agreeTerms]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Sign in as a guest</Text>
      {/* name */}
      <TextInput
        autoCapitalize="none"
        name="name"
        value={name}
        onChangeText={suscribe('name')}
        autoCompleteType="off"
        placeholder="Name"
        style={styles.input}
      />

      {/* surname */}
      <TextInput
        autoCapitalize="none"
        name="surname"
        value={surname}
        onChangeText={suscribe('surname')}
        autoCompleteType="off"
        placeholder="Surname"
        style={styles.input}
      />
      {/* email */}
      <TextInput
        autoCapitalize="none"
        name="email"
        value={email}
        onChangeText={suscribe('email')}
        autoCompleteType="off"
        placeholder="Email"
        style={styles.input}
      />
      {/* edad */}
      <TextInput
        keyboardType="numeric"
        name="age"
        value={age}
        onChangeText={suscribe('age')}
        placeholder="Age"
        maxLength={3}
        style={styles.input}
      />

      <View style={styles.agreeTerms}>
        <CheckBox
          disabled={false}
          name="acceptTerms"
          onValueChange={suscribe('agreeTerms')}
          value={agreeTerms}
        />
        <Text>Agree terms and conditions</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={[styles.sendButton, isDisabled && {backgroundColor: '#ccc'}]}
          onPress={handleSubmit}
          disabled={isDisabled}>
          <Text style={{fontSize: 20, color: '#fff'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONTAINER_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    borderColor: INPUT_FORM_BORDER_COLOR,
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 6,
    padding: 10,
    fontSize: 18,
  },
  containerButton: {
    alignSelf: 'stretch',
  },
  sendButton: {
    backgroundColor: SIGNIN_BUTTON_BACKGROUND_COLOR,
    height: 48,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreeTerms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
