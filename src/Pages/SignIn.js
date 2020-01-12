/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Input} from 'react-native-elements';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import BackFlat from '../Components/BackFlat';

const SignIn = props => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const login = async (a, b) => {
    console.log('Username : ', a);
    console.log('Password : ', b);
    const config = {
      username: userName,
      password: password,
    };
    const url = 'https://hiring-channel-app.herokuapp.com/auth/login';
    await Axios.post(url, config)
      .then(({data}) => {
        if (data.message === 'Login Success') {
          AsyncStorage.setItem('username', userName);
          AsyncStorage.setItem('password', password);
          AsyncStorage.setItem('role', data.role);
          AsyncStorage.setItem('token', data.token);
          console.log(data);
          if (data.role === 'company') {
            props.navigation.navigate('Home');
          } else if (data.role === 'engineer') {
            props.navigation.navigate('Engineer');
          }
        } else {
          Alert.alert('Error', data.message);
        }
      })
      .catch(({data}) => console.log(data));
  };
  return (
    <ScrollView>
      <View
        style={{
          marginLeft: 30,
          marginRight: 20,
          flex: 1,
        }}>
        <BackFlat navigation={props.navigation} page="Started" />
        <Image
          style={{
            marginTop: -15,
            width: 170,
            height: 180,
            resizeMode: 'contain',
          }}
          source={require('../Images/arkaHD.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontFamily: 'AirbnbCerealBook',
            marginBottom: -5,
          }}>
          Proceed with your
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontFamily: 'AirbnbCerealBold',
            marginBottom: 50,
          }}>
          Login
        </Text>
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          containerStyle={{marginBottom: 15}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 12,
            fontFamily: 'AirbnbCerealBook',
          }}
          label="Username"
          onChange={e => {
            setuserName(e.nativeEvent.text);
            console.log(e.nativeEvent.text);
          }}
        />
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 12,
            fontFamily: 'AirbnbCerealBook',
          }}
          secureTextEntry={true}
          label="Password"
          onChange={e => {
            setpassword(e.nativeEvent.text);
            console.log(e.nativeEvent.text);
          }}
        />
        <TouchableOpacity
          style={{
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#575A89',
            marginTop: 30,
            padding: 10,
            height: 45,
            width: 300,
            borderRadius: 10,
          }}
          onPress={() => login(userName, password)}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'AirbnbCerealMedium',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#8c8c8c',
            fontSize: 12,
            fontFamily: 'AirbnbCerealMedium',
            marginBottom: 50,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Forgot Password ?
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignIn;
