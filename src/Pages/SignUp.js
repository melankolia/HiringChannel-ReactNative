/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View, Alert} from 'react-native';
import {ButtonGroup, Input} from 'react-native-elements';
import BackFlat from '../Components/BackFlat';
import {connect} from 'react-redux';
import {authSignUp} from '../Redux/Actions/Auth/SignUp';

const SignUp = props => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [userName, setuserName] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const buttons = ['company', 'engineer'];

  const updateIndex = index => {
    setselectedIndex(index);
    console.log(buttons[index]);
  };

  const handleSignUp = async () => {
    let role = buttons[selectedIndex];
    let data = {
      username: userName,
      name: name,
      password: password,
      role: role,
    };
    await props.dispatch(authSignUp(data));
    let response = props.signUp.response;
    console.log('RESPON : ', response);
    if (response.status === 200) {
      if (response.data.status === 'Registration Success') {
        await Alert.alert(
          'Registration Success',
          'Please login to access your profile',
        );
        props.navigation.navigate('SignIn');
      }
    } else if (response.status === 'error') {
      if (response.message.code === 'ER_DUP_ENTRY') {
        Alert.alert('Error', 'Username has already been taken');
      }
    } else {
      Alert.alert('Something Went Wrong');
    }
  };

  return (
    <ScrollView>
      <View style={{marginLeft: 30, marginRight: 20, flex: 1}}>
        <BackFlat navigation={props.navigation} page="Started" />
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontFamily: 'AirbnbCerealBold',
            marginBottom: 25,
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontFamily: 'AirbnbCerealBook',
          }}>
          Hello there !
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontFamily: 'AirbnbCerealBook',
            marginBottom: 50,
          }}>
          Welcome to you
        </Text>
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          containerStyle={{marginBottom: 15}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 14,
            fontFamily: 'AirbnbCerealBook',
          }}
          label="Username"
          placeholder="Enter Username"
          inputStyle={{fontSize: 12}}
          onChange={e => {
            setuserName(e.nativeEvent.text);
            console.log(userName);
          }}
        />
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          containerStyle={{marginBottom: 15}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 14,
            fontFamily: 'AirbnbCerealBook',
          }}
          label="Name"
          placeholder="Enter Name"
          inputStyle={{fontSize: 12}}
          onChange={e => {
            setname(e.nativeEvent.text);
            console.log(name);
          }}
        />
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          containerStyle={{marginBottom: 15}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 14,
            fontFamily: 'AirbnbCerealBook',
          }}
          secureTextEntry={true}
          label="Password"
          placeholder="Enter Password"
          inputStyle={{fontSize: 12}}
          onChange={e => {
            setpassword(e.nativeEvent.text);
            console.log(password);
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'AirbnbCerealBold',
            color: '#87919F',
            marginBottom: 5,
          }}>
          Role
        </Text>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            height: 40,
            marginLeft: 0,
            borderRadius: 50,
            borderColor: 'gray',
          }}
          textStyle={{fontSize: 12, fontFamily: 'AirbnbCerealBook'}}
          selectedButtonStyle={{backgroundColor: '#87919F'}}
        />
        <TouchableOpacity
          style={{
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#575A89',
            marginTop: 20,
            padding: 10,
            height: 45,
            width: 300,
            borderRadius: 10,
          }}
          onPress={() => handleSignUp()}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'AirbnbCerealMedium',
            }}>
            Register
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#8c8c8c',
            fontSize: 10,
            fontFamily: 'AirbnbCerealMedium',

            alignSelf: 'center',
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          By registering with Hiring Channel App, you agree to our Term of Use
          and our Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    signUp: state.authSignUp,
  };
};

export default connect(mapStateToProps)(SignUp);
