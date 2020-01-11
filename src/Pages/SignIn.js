/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';

const SignIn = props => {
  return (
    <ScrollView>
      <View
        style={{
          marginLeft: 30,
          marginRight: 20,
          flex: 1,
        }}>
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
          onPress={() => props.navigation.navigate('Engineer')}>
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
