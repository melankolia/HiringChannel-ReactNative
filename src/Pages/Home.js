import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Card from '../Components/Card.js';
import bellpic from '../Images/bell1.png';
import arkapic from '../Images/image1.png';

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
            <Card
              name="Budi Bulog"
              title="Frontend Developer"
              skills="ReactJS, React Native, Flutter"
              navigation={this.props.navigation}
            />
            <Card
              name="Rich Brian"
              title="Fullstack Developer"
              skills="ReactJS, React Native, ExpressJS, NodeJS"
              navigation={this.props.navigation}
            />
            <Card
              name="Joji"
              title="Backend Developer"
              skills="ExpressJS, NodeJS, Golang"
              navigation={this.props.navigation}
            />
            <Card
              name="Niki Zefanya"
              title="Frontend Developer"
              skills="VueJS, AngularJS"
              navigation={this.props.navigation}
            />
            <Card
              name="Filthy Frank"
              title="Backend Developer"
              skills="Ruby on Rails, Python"
              navigation={this.props.navigation}
            />
            <Card
              name="Juice WRLD"
              title="Frontend Developer"
              skills="AngularJS"
              navigation={this.props.navigation}
            />
            <Card
              name="Saykoji"
              title="Frontend Developer"
              skills="React Native, ReactJS"
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
        <FloatingAction color={'#F4CF5D'} />
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

export default Home;
