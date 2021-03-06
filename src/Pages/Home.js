import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {connect} from 'react-redux';
import Card from '../Components/Card.js';
import bellpic from '../Images/bell1.png';
import arkapic from '../Images/image1.png';
import {getAllEngineer} from '../Redux/Actions/Engineer/getAllEngineer';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      engineer: '',
      limit: 10,
    };
  }
  fetchData = async (search, searchName) => {
    let username, password, role, token, response;
    try {
      username = await AsyncStorage.getItem('username');
      password = await AsyncStorage.getItem('password');
      role = await AsyncStorage.getItem('role');
      token = await AsyncStorage.getItem('token');

      let link = [
        'https://hiring-channel-app.herokuapp.com/api/Engineer',
        'https://hiring-channel-app.herokuapp.com/api/Engineer/search',
      ];

      if (username !== null && password !== null && role !== null) {
        console.log('username : ', username);
        console.log('password : ', password);
        console.log('role : ', role);
        let config = {
          headers: {Authorization: 'Bearer ' + token, username: username},
          params: {
            searchName: searchName,
            Limit: this.state.limit,
          },
        };
        console.log('Search: ', search);
        if (search) {
          await this.props.dispatch(getAllEngineer(link[1], config));
          response = this.props.engineer.engineerBeta.data.response;
        } else if (search === false) {
          await this.props.dispatch(getAllEngineer(link[0], config));
          response = this.props.engineer.engineerBeta.data.response;
        }
      } else {
        console.log('Null Data');
      }
    } catch (e) {
      console.log('Something went wrong');
    }
    this.setState({engineer: response});
    // console.log(this.state);
  };
  componentDidMount() {
    this.fetchData(false, '');
  }

  render() {
    const {engineer} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('../Images/niki.png')} />
          <Image style={styles.headerPic} source={arkapic} />
          <Image style={styles.bellPic} source={bellpic} />
        </View>
        <TextInput
          style={styles.search}
          placeholder="Search"
          onSubmitEditing={e => {
            this.fetchData(true, e.nativeEvent.text);
          }}
        />
        <ScrollView>
          <View style={styles.body}>
            {engineer.length > 0 ? (
              engineer.map((value, index) => (
                <Card
                  key={index}
                  name={engineer[index].Name}
                  title={engineer[index].Title}
                  skills={engineer[index].Skills}
                  navigation={this.props.navigation}
                />
              ))
            ) : (
              <ActivityIndicator
                style={styles.spinner}
                size="large"
                color="gray"
              />
            )}
          </View>
        </ScrollView>
        <FloatingAction color={'#F4CF5D'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    margin: 20,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: '6%',
    paddingRight: '6%',
  },

  headerPic: {
    width: 90,
    height: 40.33,
  },
  bellPic: {
    width: 25,
    height: 25,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  search: {
    marginLeft: '6%',
    marginRight: '6%',
    paddingLeft: 36,
    height: 40,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
    marginBottom: 15,
  },
  body: {
    justifyContent: 'center',
    paddingBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const mapStateToProps = state => {
  return {
    engineer: state.getAllEngineer,
  };
};

export default connect(mapStateToProps)(Home);
