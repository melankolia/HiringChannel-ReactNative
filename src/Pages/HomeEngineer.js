/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Description from '../Components/Description';
import Skills from '../Components/Skills';
import {getEngineer} from '../Redux/Actions/Engineer/getEngineer';

class HomeEngineer extends Component {
  constructor() {
    super();
    this.state = {
      SkillsData: [],
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  fetchData = async (username, password, role, token) => {
    try {
      username = await AsyncStorage.getItem('username');
      password = await AsyncStorage.getItem('password');
      role = await AsyncStorage.getItem('role');
      token = await AsyncStorage.getItem('token');

      if (username !== null && password !== null && role !== null) {
        console.log('username : ', username);
        console.log('password : ', password);
        console.log('role : ', role);
      }
    } catch (e) {
      console.log('Something went wrong');
    }
    let config = {
      headers: {Authorization: 'Bearer ' + token, username: username},
    };
    await this.props.dispatch(getEngineer(config, username));
    if (this.props.engineer.engineerBeta.Skills > 0) {
      let SkillsData = this.props.engineer.engineerBeta.Skills.split(',');
      this.setState({SkillsData});
    } else {
      this.setState({SkillsData: ['Empty']});
    }
  };
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
    console.log(this.state);
  }
  componentDidMount() {
    let username, password, role, token;
    this.fetchData(username, password, role, token);
  }
  render() {
    const buttons = ['Description', 'Skills', 'Projects'];
    const {selectedIndex, SkillsData} = this.state;

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
            <View
              style={{flexDirection: 'column', marginTop: 5, marginLeft: 19}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 26,
                  fontFamily: 'AirbnbCerealMedium',
                }}>
                {this.props.engineer.engineerBeta.Name}
              </Text>
              <Text
                style={{
                  margin: 0,
                  color: 'black',
                  fontSize: 12,
                  fontFamily: 'AirbnbCerealMedium',
                }}>
                {this.props.engineer.engineerBeta.Title}
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
              onPress={this.updateIndex}
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
              {this.state.selectedIndex === 0 ? (
                <Description detail="Kiwil" />
              ) : this.state.selectedIndex === 1 ? (
                SkillsData.map((value, index) => (
                  <Skills name={value} key={index} />
                ))
              ) : (
                <Text
                  style={{
                    marginHorizontal: 5,
                    fontSize: 12,
                    fontFamily: 'AirbnbCerealBook',
                    color: 'gray',
                  }}>
                  EMPTY
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    engineer: state.Engineer,
  };
};

export default connect(mapStateToProps)(HomeEngineer);
