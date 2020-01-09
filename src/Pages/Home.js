import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';
import Card from '../Components/Card.js';
import arkapic from '../Images/image1.png';
import bellpic from '../Images/bell1.png';

class Home extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('../Images/niki.png')} />
          <Image style={styles.headerPic} source={arkapic} />
          <Image style={styles.bellPic} source={bellpic} />
        </View>
        <TextInput style={styles.search} placeholder="Search" />
        <ScrollView>
          <View style={styles.body}>
            <Text>NYAPO</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '9.7%',
    paddingLeft: '6%',
    paddingRight: '6%',
  },

  headerPic: {
    width: '27%',
    height: 40.33,
  },
  bellPic: {
    width: '7%',
    height: 25,
  },
  avatar: {
    width: '12%',
    height: 40,
  },
  search: {
    marginLeft: '6%',
    marginRight: '6%',
    paddingLeft: 36,
    height: 40,
    borderRadius: 10,
    elevation: 2,
    marginTop: '3%',
    marginBottom: '4%',
  },
  body: {
    justifyContent: 'space-around',
    paddingLeft: '3%',
    paddingBottom: '3%',
    paddingRight: '3%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
