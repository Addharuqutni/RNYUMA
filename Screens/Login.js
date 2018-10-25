import React, {Component} from 'react';
import {OnPress, AppRegistry, Button, View, TextInput, StyleSheet, Image, Style, Text, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

class Login extends Component{
  
  render() {
    return (
      <View style={styles.bck}>
      <Image
        style={{width: 100, height: 150, marginLeft:130, marginTop:50}} 
        source={require('./Logo.png')} 
      />
      <Text style={styles.instructions}></Text>

      <TextInput
        style={{marginBottom: 5,height: 50, borderColor: 'black', borderWidth: 1}}
        placeholder='Username'
        onChangeText={(text) => this.setState({text})}
      />

      <TextInput
        style={{marginBottom: 5,height: 50, borderColor: 'black', borderWidth: 1}}
        secureTextEntry
        onChangeText={(text) => this.setState({text})}
        placeholder='Password'
      />

      <TouchableOpacity
        accessible={true}
        onPress={() => this.props.navigation.navigate('Home')}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#BBBBBB',
    marginBottom: 70,
    fontWeight: 'bold'
  },
  bck: {
    backgroundColor: '#bdc3c7'
  },
  button: {
    color: '#000000',
    marginTop: 5,
    backgroundColor: '#95a5a6',
    height: 40,
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 2,
    marginBottom: 100
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
});
