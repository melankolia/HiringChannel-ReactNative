/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ButtonGroup, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackFlat from '../Components/BackFlat';

const SignUp = props => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const buttons = ['Company', 'Engineer'];

  const updateIndex = index => {
    setselectedIndex(index);
    console.log(buttons[index]);
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
          onPress={() => props.navigation.navigate('SignIn')}>
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
