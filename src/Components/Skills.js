/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const Skills = props => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 20,
      }}>
      <Text
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 20,
          color: 'white',
          backgroundColor: '#87919F',
          fontSize: 12,
          fontFamily: 'AirbnbCerealBook',
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Skills;
