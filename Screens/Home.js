import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View style={styles.bck}>
        <Text style={styles.instructions}>WELCOME TO MY PROFILE</Text>
        <Image
        style={{width: 100, height: 100, marginLeft:145, marginTop:30, marginBottom:30}} 
        source={require('./foto.jpg')}
      	/>
        <Text style={styles.nulis}>ADDHARUQUTNI AZZYUMARDI NAWASHARIF</Text>
        <TouchableOpacity
        accessible={true}
        onPress={() => this.props.navigation.navigate('Login')}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
        </View>
        </TouchableOpacity>
        </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25
  },
  nulis: {
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#000000',
  	marginTop: 10
  },
  button: {
    color: '#000000',
    marginTop: 20,
    backgroundColor: '#95a5a6',
    height: 40,
    width: 80,
    left: 150,
    justifyContent: 'center',
    padding: 1,
    paddingHorizontal: 2,
    marginBottom: 250
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  bck: {
    backgroundColor: '#bdc3c7'
  }
});