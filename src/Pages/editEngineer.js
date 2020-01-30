/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {Component} from 'react';
import {Alert, Text, View, ToastAndroid} from 'react-native';
import {Input} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Header from '../Components/Header';
import {getEngineer} from '../Redux/Actions/Engineer/getEngineer';

class editEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.engineer.engineerBeta.Name,
      title: props.engineer.engineerBeta.Title,
      description: props.engineer.engineerBeta.DescriptionS,
    };
  }
  handleSave = async () => {
    let usernameLocal = await AsyncStorage.getItem('username');
    let token = await AsyncStorage.getItem('token');
    const url =
      'https://hiring-channel-app.herokuapp.com/api/engineer/' +
      parseInt(this.props.engineer.engineerBeta.id, 10);
    let data = {
      Name: this.state.name,
      Title: this.state.title,
    };
    let headers = {Authorization: 'Bearer ' + token, username: usernameLocal};
    await axios
      .patch(url, null, {
        headers: headers,
        params: data,
      })
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Info', 'Update Success');
        } else {
          Alert.alert('Something Went Wrong');
        }
        // this.getAllengineer();
      })
      .catch(err => console.log(err));
    let config = {
      headers: {Authorization: 'Bearer ' + token, username: usernameLocal},
    };
    await this.props.dispatch(getEngineer(config, usernameLocal));
  };

  render() {
    return (
      <>
        <ScrollView>
          <Header editMode={true} />
          <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
            <Input
              inputContainerStyle={{marginLeft: -10, height: 35}}
              containerStyle={{marginBottom: 5}}
              labelStyle={{
                marginHorizontal: -10,
                fontSize: 14,
                fontFamily: 'AirbnbCerealBook',
              }}
              label="Name"
              defaultValue={this.props.engineer.engineerBeta.Name}
              inputStyle={{fontSize: 14}}
              onChange={e => {
                this.setState({name: e.nativeEvent.text});
                console.log(this.state.name);
              }}
            />
            <Input
              inputContainerStyle={{marginLeft: -10, height: 35}}
              containerStyle={{marginBottom: 5}}
              labelStyle={{
                marginHorizontal: -10,
                fontSize: 14,
                fontFamily: 'AirbnbCerealBook',
              }}
              label="Title"
              defaultValue={this.props.engineer.engineerBeta.Title}
              inputStyle={{fontSize: 14}}
              onChange={e => {
                this.setState({title: e.nativeEvent.text});
                console.log(this.state.title);
              }}
            />
            <Input
              inputContainerStyle={{marginLeft: -10, height: 75}}
              containerStyle={{marginBottom: 5}}
              labelStyle={{
                marginHorizontal: -10,
                fontSize: 14,
                fontFamily: 'AirbnbCerealBook',
              }}
              label="Description"
              multiline={true}
              textAlignVertical="top"
              inputStyle={{fontSize: 14}}
              onChange={e => {
                this.setState({description: e.nativeEvent.text});
                console.log(this.state.description);
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 35,
              backgroundColor: '#F4CF5D',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleSave()}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'AirbnbCerealBook',
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    engineer: state.Engineer,
  };
};

export default connect(mapStateToProps)(editEngineer);
