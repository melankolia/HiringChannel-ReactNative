/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import Description from '../Components/Description';
import Skills from '../Components/Skills';
import {getEngineer} from '../Redux/Actions/Engineer/getEngineer';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

      let config = {
        headers: {Authorization: 'Bearer ' + token, username: username},
      };

      if (username !== null && password !== null && role !== null) {
        console.log('username : ', username);
        console.log('password : ', password);
        console.log('role : ', role);
        console.log('token : ', token);
        await this.props.dispatch(getEngineer(config, username));
      }
    } catch (e) {
      console.log('Something went wrong');
      console.log(e);
    }

    // console.log(this.props.engineer.engineerBeta.Skills)
    if (this.props.engineer.engineerBeta.Skills) {
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
    console.log('DID MOUNT 1');
  }
  render() {
    const buttons = ['Description', 'Skills', 'Projects'];
    const {selectedIndex, SkillsData} = this.state;
    return (
      <View style={{flexDirection: 'column'}}>
        <ScrollView>
          <Header navigation={this.props.navigation} editMode={false} />
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
                marginBottom: 5,
                borderColor: 'gray',
              }}
              textStyle={{
                fontSize: 12,
                fontFamily: 'AirbnbCerealBook',
              }}
              selectedButtonStyle={{backgroundColor: '#F4CF5D'}}
              selectedTextStyle={{color: 'black'}}
            />
            {this.state.selectedIndex === 1 ? (
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      marginHorizontal: 5,
                      marginTop: 2,
                    }}
                    name="minus"
                    size={14}
                    color="#989898"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    style={{
                      marginHorizontal: 5,
                      marginTop: 2,
                    }}
                    name="plus"
                    size={14}
                    color="#989898"
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            <View
              style={{
                marginTop: 10,
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
