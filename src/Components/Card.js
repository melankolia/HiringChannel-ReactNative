/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const Card = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          props.navigation.navigate('Detail', {
            name: props.name,
            title: props.title,
            skills: props.skills,
          })
        }>
        <ImageBackground
          style={styles.image}
          source={require('../Images/lucas.png')}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.overlay}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.successRate}>
              <Image source={require('../Images/check1.png')} />
              <Text style={styles.titleSuccessRate}> 47 Projects</Text>
            </View>
            <View style={styles.successRate}>
              <Image source={require('../Images/star1.png')} />
              <Text style={styles.titleSuccessRate}> 97% Success Rate</Text>
            </View>
            <View style={styles.skill}>
              <Text style={styles.titleSkill}>Skills: </Text>
              <Text style={styles.skills}>{props.skills}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 254,
    width: 150,
  },
  image: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 254,
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingLeft: '6.4%',
    paddingRight: '7%',
    paddingBottom: '10%',
    height: '50%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AirbnbCerealMedium',
    paddingTop: '5%',
  },
  title: {
    color: 'white',
    fontSize: 9,
    fontFamily: 'AirbnbCerealMedium',
    marginBottom: 2,
  },
  titleSuccessRate: {
    color: 'white',
    fontSize: 8,
    fontFamily: 'AirbnbCerealMedium',
  },
  successRate: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1.5%',
    marginTop: '1.5%',
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
  },
  titleSkill: {
    color: 'white',
    fontSize: 9,
    fontFamily: 'AirbnbCerealMedium',
  },
  skills: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'AirbnbCerealMedium',
  },
});
export default Card;
