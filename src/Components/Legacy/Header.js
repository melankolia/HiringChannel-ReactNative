/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
      <Image
        style={{width: 70, height: 70, borderRadius: 60, marginRight: 20}}
        source={require('../Images/harishan.png')}
      />
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'AirbnbCerealMedium',
          }}>
          Jennifer Lawrence
        </Text>
        <Text
          style={{
            marginLeft: 2,
            color: 'gray',
            fontSize: 12,
            fontFamily: 'AirbnbCerealMedium',
          }}>
          Frontend Developer
        </Text>
      </View>
    </View>
  );
};

export default Header;
