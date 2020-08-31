import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
 
export default class SettingsScreen extends React.Component {
    
 
  render() {
    return (
      <View style={{ flex: 1,marginTop:8, alignItems: 'center' }}>

        <View style={{ backgroundColor:'#E6E6FA',width: 400,height:150, justifyContent: 'center', alignItems: 'center',borderRadius: 10 ,}}>
        <Image resizeMode='center' style={{width:100, height: 80 }} source={require('./img/05066102.jpg')} />
           <Text> แผนที่เส้นทางการเดินรถและตารางเวลา </Text> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Map')}>
                <Text>เส้นทาง</Text>
            </TouchableOpacity>
          </View>

          <View style={{margin:10, backgroundColor:'#E6E6FA',width: 400,height:150, justifyContent: 'center', alignItems: 'center',borderRadius: 10 ,}}>
            <Image resizeMode='center' style={{width:100, height: 80 }} source={require('./img/trophy_icon-icons.com_49969.png')} />
           <Text> สุ่มคะแนนแจกรางวัล</Text> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('SensorRandome')}>
                <Text>Randome</Text>
            </TouchableOpacity>
          </View>

          <View style={{margin:10, backgroundColor:'#E6E6FA',width: 400,height:150, justifyContent: 'center', alignItems: 'center',borderRadius: 10 ,}}>
            <Image resizeMode='center' style={{width:100, height: 80 }} source={require('./img/05066102.jpg')} />
           <Text> Application จาก Assignment</Text> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('CYH')}>
                <Text>GO</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
                style={styles.button1}
                onPress={() => this.props.navigation.navigate('Pawarin')}>
                <Text>ผู้พัฒนา Application</Text>
            </TouchableOpacity>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#8B658B',
    //padding: 10,
    width: 100,
    margin: 16,
    borderRadius:20,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#B2DFEE',
    padding: 10,
    width: 300,
    marginTop: 10,
    borderRadius: 18,
  },
});