/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Back from '../Components/Back';

const Header = props => {
  return (
    <>
      <View style={{width: '100%', alignItems: 'center'}}>
        <ImageBackground
          style={{width: '100%', height: 220, zIndex: -1}}
          source={require('../Images/harishanBG.png')}>
          {props.editMode ? <Back page="Engineer" /> : null}
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
            onPress={() => props.navigation.navigate('editEngineer')}>
            {props.editMode ? null : (
              <Icon name="cog" size={30} color="white" />
            )}
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
        }}>
        <Image
          style={{
            width: 120,
            height: 180,
            marginLeft: 19,
            marginTop: -40,
            borderRadius: 20,
          }}
          source={require('../Images/harishanSM.png')}
        />
        <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 19}}>
          {props.editMode ? (
            <Icon
              style={{alignSelf: 'flex-start'}}
              name="edit"
              size={20}
              color="black"
            />
          ) : null}

          <Text
            style={{
              color: 'black',
              fontSize: 26,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            {props.engineer.engineerBeta.Name}
          </Text>

          <Text
            style={{
              margin: 0,
              color: 'black',
              fontSize: 12,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            {props.engineer.engineerBeta.Title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              style={{marginRight: 5, height: 15, width: 15}}
              source={require('../Images/check2.png')}
            />
            <Text
              style={{
                margin: 0,
                color: 'black',
                fontSize: 12,
                fontFamily: 'AirbnbCerealMedium',
              }}>
              47 Projects
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{marginRight: 5, height: 15, width: 15}}
              source={require('../Images/star2.png')}
            />
            <Text
              style={{
                margin: 0,
                color: 'black',
                fontSize: 12,
                fontFamily: 'AirbnbCerealMedium',
              }}>
              97% Success Rate
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = state => {
  return {
    engineer: state.Engineer,
  };
};

export default connect(mapStateToProps)(Header);
