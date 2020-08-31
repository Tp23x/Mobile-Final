import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity,Image ,FlatList} from 'react-native';
 
export default class Searchh extends Component{
 
  constructor(props) {
   super(props)
    this.state = {
      TextInput_SName: '',
      TextInput_SIDD: '',
      data:[],
   }
 }
 
 InsertStudentRecordsToServer = () =>{
 
      fetch('http://172.16.157.86/test/getData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
  
          SName : this.state.TextInput_SName,
  
          SIDD : this.state.TextInput_SIDD,
        })
 
      })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            }, function() {
           });
 
          }).catch((error) => {
            console.error(error);
          });
        }
        
 
 render(){
   return (
    <View style={styles.MainContainer}>
      <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/sea.png')} />
       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> ค้นหาข้อมูล STAFF</Text>
        <TextInput
          placeholder="Enter  Name"
          onChangeText={ TextInputValue => this.setState({ TextInput_SName : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter ID"
          onChangeText={ TextInputValue => this.setState({ TextInput_SIDD : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
        <Text style={styles.TextStyle}> ค้นหา </Text>
        </TouchableOpacity>
      <FlatList
              data={this.state.dataSource}
              keyExtractor= {({id},index) => id}
              renderItem={({item})=>

              <View style={{backgroundColor:'#00CDCD',padding:10,margin:10,borderRadius:10}}>
                <Text style={{color:'black', fontWeight:'bold'}}>รหัสพนักงาน:{item.SID}{'\t'}ชื่อ: {item.Sname}</Text>
                <Text style={{color:'#fff'}}>{item.STelephone}</Text>
                <Text style={{color:'#fff'}}>{item.SPhoto}</Text>
              </View>

              } 
            />
    </View>
           
   );
 }
}

 
const styles = StyleSheet.create({
 
  MainContainer :{
 
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#B0E0E6'
 
  },
 MainContainer_For_Show_StudentList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },
 
  TextInputStyleClass: {
 
  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#36648B',
  borderRadius: 20 ,
 
  },
 
  TouchableOpacityStyle: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
 
  },
 
  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },
 
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
 
});





/*

import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}*/