/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Components/Legacy/Header';
import Stats from '../Components/Legacy/Stats';

const Engineer = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.4, backgroundColor: 'white'}}>
        <View
          style={{
            marginHorizontal: 20,
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 15,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'AirbnbCerealBook',
            }}>
            Profile
          </Text>
        </View>
        <Header />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
            marginBottom: 10,
            marginHorizontal: 20,
          }}>
          <Stats value="1000" stat="Projects" />
          <Stats value="750" stat="Completed" />
          <Stats value="250" stat="Failed" />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            backgroundColor: '#575A89',
            borderRadius: 5,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'AirbnbCerealBook',
              color: 'white',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            padding: 3,
            fontFamily: 'AirbnbCerealLight',
            color: 'black',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          I worked more than 8 years in Software Industry. Widely recognized as
          the most comprehensive and rigorous full-stack developer in the
          country I work as Virtual Interim CTO and Full Stack Lead developer,
          seeking for a new opportunities.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F9FD',
        }}>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              width: 150,
              height: 100,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 12,
                  fontFamily: 'AirbnbCerealMedium',
                }}>
                Skills
              </Text>
              <Icon name="angle-down" size={12} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Engineer;
