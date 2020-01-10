/* eslint-disable react-native/no-inline-styles */
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Image, Text, TouchableOpacity, ScrollView, View} from 'react-native';
import {Input} from 'react-native-elements';

const SignUp = props => {
  return (
    <ScrollView>
      <View style={{marginLeft: 30, marginRight: 20, flex: 1}}>
        <TouchableOpacity
          style={{height: 65, width: 80}}
          onPress={() => props.navigation.navigate('Started')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 80,
              marginLeft: -35,
            }}>
            <Icon name="angle-left" size={20} />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontFamily: 'AirbnbCerealBook',
                marginLeft: 5,
              }}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
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
        />
        <Input
          inputContainerStyle={{marginLeft: -10, height: 35}}
          containerStyle={{marginBottom: 15}}
          labelStyle={{
            marginHorizontal: -10,
            fontSize: 14,
            fontFamily: 'AirbnbCerealBook',
          }}
          label="Password"
          placeholder="Enter Password"
          inputStyle={{fontSize: 12}}
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
          onPress={() => props.navigation.navigate('Home')}>
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

export default SignUp;
