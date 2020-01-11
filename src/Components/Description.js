/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const Description = props => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          paddingHorizontal: 5,
          fontFamily: 'AirbnbCerealMedium',
        }}>
        I worked more than 8 years in Software Industry. Widely recognized as
        the most comprehensive and rigorous full-stack developer in the country.
      </Text>
      <Text
        style={{
          marginTop: 20,
          color: 'black',
          fontSize: 12,
          paddingHorizontal: 5,
          fontFamily: 'AirbnbCerealMedium',
        }}>
        I work as Virtual Interim CTO and Full Stack Lead developer, seeking for
        a new opportunities
      </Text>
    </View>
  );
};

export default Description;
