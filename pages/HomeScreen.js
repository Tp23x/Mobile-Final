import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';

 
export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.bgImage} source={require('./img/2019_07_16_5794.jpg')}/>
        <Image resizeMode='center' style={{width:300, height: 340,marginLeft:25,marginTop:30,flex:1 }} source={require('./img/wuuu.png')} />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>แหล่งที่เที่ยว</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const resizeMode = 'cover';
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#B2DFEE',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 18,
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});



/*<TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>*/