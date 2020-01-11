/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const Stats = props => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <Text style={{fontSize: 14, fontFamily: 'AirbnbCerealMedium'}}>
        {props.value}
      </Text>
      <Text
        style={{fontSize: 10, fontFamily: 'AirbnbCerealMedium', color: 'gray'}}>
        {props.stat}
      </Text>
    </View>
  );
};

export default Stats;
