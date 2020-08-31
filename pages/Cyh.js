import React from 'react';
import { View, Button, Text, DatePickerAndroid,Switch,Alert,StyleSheet,Image} from 'react-native';

export default class MyApp extends React.Component {
   constructor() {
      super();
      this.state = { iyear : 2020, imonth : 3, iday : 9}

      this.state = {
        switch1Value: false,
     }
     this.state = {
      switch2Value: false,
   }
   }

 toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
 toggleSwitch2 = (value) => {
  this.setState({switch2Value: value})
}

_onPressButton() {
  Alert.alert(
    'แจ้งหยุดการรับ-ส่งนักเรียน',
    'เรียบร้อย!',
    [
      {
        text: 'Ok',
        onPress1: () =>
        that.props.navigation.navigate('Parent'),
      }
    ],
    { cancelable: false }
  );
}

   render() {
      return(         
         <View style={{  flex : 1, alignItems : "center" }}>
           <Image style={styles.bgImage} source={{ uri: "https://www.img.in.th/images/f537e0c63eb5bc4d91107f241845f8d2.jpg" }}/>
           <Text >{"\n"}</Text>
           <Text >{"\n"}</Text>
            <Button title="เลือกวันที่"
             onPress={ async () => {
              const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
              if (action === DatePickerAndroid.dateSetAction) 
              { this.setState({ iyear : year, imonth: month, iday: day }); }
              if (action === DatePickerAndroid.dismissedAction)                         
              { console.log("Dismissed"); }
             }}
            />
            <Text >{"\n"}</Text>
            <Text style={{ fontSize:20, alignItems : "center" }}>วันที่ {this.state.iday} {"/"} {this.state.imonth} {"/"} {this.state.iyear}</Text>

            <Text >{"\n"}</Text>
            <Text >{"\n"}</Text>
            <Text >{"\n"}</Text>
              <View style={{ flexDirection:"row",justifyContent:"space-around", backgroundColor:"#FFE4B5",width:300,height:30,borderRadius:6,margin:10}}>
                  <Text style={{ fontSize:18, alignItems : "center" }} >{"\t"}เดินทางไปส่งที่โรงเรียนเอง</Text> 
                    <View >
                    <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/></View>
              </View>

              <View style={{flexDirection:"row",justifyContent:"space-around", backgroundColor:"#FFE4B5",width:300,height:30,borderRadius:6,margin:10}}>
                  <Text style={{ fontSize:18, alignItems : "center" }} >{"\t"}เดินทางไปรับที่โรงเรียนเอง</Text> 
                    <View >
                    <Switch onValueChange = {this.toggleSwitch2} value = {this.state.switch2Value}/></View>
              </View>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Button		 
                  onPress={this._onPressButton}
                  title="ยืนยัน"
                  color='blue'
              />
         </View>
      );
   }
}

const resizeMode = 'cover';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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