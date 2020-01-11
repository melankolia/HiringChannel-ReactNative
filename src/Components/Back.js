/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';

const Back = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#F4CF5D',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 15,
        marginLeft: 18,
      }}
      onPress={() => props.navigation.navigate(props.page)}>
      <Icon name="angle-left" size={25} color="white" />
    </TouchableOpacity>
  );
};

export default withNavigation(Back);
