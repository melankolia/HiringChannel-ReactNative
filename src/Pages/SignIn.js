/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';

const SignIn = () => {
  return (
    <View style={{marginLeft: 30, marginRight: 20, marginTop: 20, flex: 1}}>
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontFamily: 'AirbnbCerealBook',
        }}>
        Back
      </Text>
      <Image
        style={{
          marginTop: 0,
          width: 150,
          height: 150,
          resizeMode: 'contain',
        }}
        source={require('../Images/arkaHD.png')}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontFamily: 'AirbnbCerealBook',
        }}>
        Proceed with your
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontFamily: 'AirbnbCerealBold',
          marginBottom: 30,
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
      />
      <Input
        inputContainerStyle={{marginLeft: -10, height: 35}}
        labelStyle={{
          marginHorizontal: -10,
          fontSize: 12,
          fontFamily: 'AirbnbCerealBook',
        }}
        label="Password"
      />
    </View>
  );
};

export default SignIn;
