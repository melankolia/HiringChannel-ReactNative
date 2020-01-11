/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Description from '../Components/Description';
import Skills from '../Components/Skills';

const Detail = props => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const buttons = ['Description', 'Skills', 'Projects'];
  const SkillsData = [
    'NodeJS',
    'ExpressJS',
    'GraphQL',
    'ReactJS',
    'React Native',
  ];

  const updateIndex = index => {
    setselectedIndex(index);
    console.log(buttons[index]);
  };
  return (
    <View style={{flexDirection: 'column'}}>
      <ScrollView>
        <View style={{width: '100%', alignItems: 'center'}}>
          <ImageBackground
            style={{width: '100%', height: 220, zIndex: -1}}
            source={require('../Images/harishanBG.png')}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}>
              <Icon name="cog" size={30} color="white" />
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
            <Text
              style={{
                color: 'black',
                fontSize: 26,
                fontFamily: 'AirbnbCerealMedium',
              }}>
              Alina
            </Text>
            <Text
              style={{
                margin: 0,
                color: 'black',
                fontSize: 12,
                fontFamily: 'AirbnbCerealMedium',
              }}>
              Frontend Developer
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 50,
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
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 12,
            marginTop: 20,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 35,
              marginLeft: 0,
              borderRadius: 50,
              marginBottom: 15,
              borderColor: 'gray',
            }}
            textStyle={{
              fontSize: 12,
              fontFamily: 'AirbnbCerealBook',
            }}
            selectedButtonStyle={{backgroundColor: '#F4CF5D'}}
            selectedTextStyle={{color: 'black'}}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}>
            {selectedIndex === 0 ? (
              <Description detail="Kiwil" />
            ) : selectedIndex === 1 ? (
              SkillsData.map((value, index) => (
                <Skills name={value} key={index} />
              ))
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Detail;
