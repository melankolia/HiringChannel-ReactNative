/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const Skills = props => {
  console.log(props.name);
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 20,
      }}>
      {props.name !== 'Empty' ? (
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
      ) : (
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'AirbnbCerealBook',
            color: 'gray',
          }}>
          EMPTY
        </Text>
      )}
    </View>
  );
};

export default Skills;
