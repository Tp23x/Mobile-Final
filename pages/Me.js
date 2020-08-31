import React, { Component } from 'react';
import {  View,  StyleSheet,Image } from 'react-native';
import { Text } from 'react-native-elements';


export default class App extends Component {
    
  render() {
    return (
      <View style={styles.container1} >
        <Image  style={{width:450,paddingTop: 5, height: 300,borderRadius:10 }} source={require('./img/70893412_368382494039117_7077227344909303808_n.jpg')} />
        <Text>{'\n'}</Text>
        <View style={styles.container} >
        <Text style={{color:'#8B4513',fontSize: 20}}>นางสาว ภาวรินทร์ ใหม่อ่อน</Text>
        <Text style={{color:'#8B4513',fontSize: 15}}>รหัสนักศึกษา 60145679</Text>
        <Text style={{color:'#8B4513',fontSize: 15}}>เบอร์โทรศัพท์ 098-0356820</Text>
        <Text style={{color:'#8B4513',fontSize: 15}}>วิศวกรรมคอมพิวเตอร์</Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFCCCC'
    },
    container1: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#FFCCCC'
      },
  });