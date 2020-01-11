/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Picker,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Back from '../Components/Back';

const Detail = props => {
  const [toggleModal, settoggleModal] = useState(false);
  const [pickerValue, setpickerValue] = useState('');

  const handleToggleModal = stat => {
    settoggleModal(stat);
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <ScrollView>
        <View>
          <Modal
            isVisible={toggleModal}
            animationIn={'slideInUp'}
            animationInTiming={1000}
            backdropTransitionInTiming={500}
            animationOut={'slideOutDown'}
            animationOutTiming={1000}
            backdropTransitionOutTiming={500}
            onModalHide={() => {
              if (pickerValue) {
                Alert.alert('Status', 'Engineer Hired');
              }
            }}
            onBackButtonPress={() => handleToggleModal(false)}>
            <View style={{flex: 1, position: 'absolute'}}>
              <View
                style={{
                  width: 326,
                  height: 150,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'AirbnbCerealMedium',
                    marginTop: 20,
                  }}>
                  Select Project
                </Text>
                <View
                  style={{
                    height: 50,
                    width: 291,
                    marginTop: 15,
                    elevation: 2,
                    borderRadius: 10,
                  }}>
                  <Picker
                    selectedValue={pickerValue}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) =>
                      setpickerValue(itemValue)
                    }>
                    <Picker.Item
                      color="#CECECE"
                      label="Select Project"
                      value=""
                    />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <ImageBackground
            style={{width: '100%', height: 220, zIndex: -1}}
            source={require('../Images/harishanBG.png')}>
            <Back page="Home" />
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
              {props.navigation.getParam('name')}
            </Text>
            <Text
              style={{
                margin: 0,
                color: 'black',
                fontSize: 12,
                fontFamily: 'AirbnbCerealMedium',
              }}>
              {props.navigation.getParam('title')}
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
            paddingLeft: 26,
            paddingRight: 15,
            marginTop: 20,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            I worked more than 8 years in Software Industry. Widely recognized
            as the most comprehensive and rigorous full-stack developer in the
            country.
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 14,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            I work as Virtual Interim CTO and Full Stack Lead developer, seeking
            for a new opportunities
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 14,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            Skills:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'AirbnbCerealMedium',
            }}>
            {props.navigation.getParam('skills')}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            marginTop: 40,
            height: 35,
            backgroundColor: '#F4CF5D',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => handleToggleModal(true)}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'AirbnbCerealBook',
            }}>
            HIRE ME
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Detail;
