//Menu Booking of Customer
import React, {Component} from 'react';
import {StyleSheet, View,Text,FlatList,TouchableOpacity} from 'react-native';


export default class App extends Component{
  
  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.157.86:3002/tbl_Booking'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({data: testTable});
  }

  componentWillMount(){
      this.fetchData();
  }
    render(){
      return (
        <View style={styles.container}>
            
            <FlatList
              data={this.state.data}
              keyExtractor= {(item,index) => index.toString()}
              renderItem={({item})=>

              <View style={{backgroundColor:'#FFE4B5',padding:10,margin:10,borderRadius:10}}>
                <Text style={{color:'gray', fontWeight:'bold'}}>
                  <Text style={{color:'#000000'}}>รหัสลูกค้า: {item.CID}</Text>{'\t'}มีแพ็คเกจ {'\t'}{'\n'} {'\t'}ชมสวนสาธารณะ: {item.GTour}{'\n'}{'\t'}ตูมปัง: {item.TTour}{'\n'}{'\t'}อาหารกลางวัน: {item.Lunch}{'\n'}{'\t'}อาหารเย็น: {item.Dinner} </Text>  
              </View>
              } 
            />
            <View
               style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Monny')}>
              <Text>รายจ่าย</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#B2DFEE',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 18,
  },

});