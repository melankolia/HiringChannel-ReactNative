/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Started = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#AB84C8',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontFamily: 'AirbnbCerealBold',
          marginTop: 30,
          paddingLeft: 35,
          paddingRight: 20,
        }}>
        Hire expert freelancers for any job, online
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 12,
          fontFamily: 'AirbnbCerealMedium',
          paddingLeft: 35,
          paddingRight: 20,
          marginTop: 5,
        }}>
        Millions of small businesses use Freelancer to turn their ideas into
        reality
      </Text>
      <Image
        style={{
          marginTop: 0,
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}
        source={require('../Images/login.png')}
      />
      <View
        style={{
          marginBottom: 20,
          width: '100%',
          alignItems: 'center',
          paddingLeft: 40,
          paddingRight: 40,
        }}>
        <TouchableOpacity
          style={{
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: 10,
            height: 45,
            width: 300,
            borderRadius: 10,
          }}
          onPress={() => props.navigation.navigate('SignIn')}>
          <Text
            style={{
              fontSize: 16,
              color: '#AB84C8',
              fontFamily: 'AirbnbCerealMedium',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#575A89',
            marginTop: 10,
            padding: 10,
            height: 45,
            width: 300,
            borderRadius: 10,
          }}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'AirbnbCerealMedium',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Started;
