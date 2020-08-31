import React, {Component} from 'react';
import {StyleSheet,View,Text,FlatList,TouchableOpacity} from 'react-native';


export default class App extends Component{
  
  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.157.86:3000/tbl_Staff'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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

              <View style={{backgroundColor:'#00CDCD',padding:10,margin:10,borderRadius:10}}>
                <Text style={{color:'black', fontWeight:'bold'}}>รหัสพนักงาน:{item.SID}{'\t'}ชื่อ: {item.Sname}</Text>
                <Text style={{color:'#fff'}}>{item.STelephone}</Text>
                <Text style={{color:'#fff'}}>{item.SPhoto}</Text>
              </View>

              } 
            />
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Search')}>
                  <Text>ค้นหา</Text>
                </TouchableOpacity>
              </View>
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


/*import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList, ActivityIndicator,List } from 'react-native';
 
export default class StaffScreen extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('http://172.16.29.144/test/getData.php') //http://172.16.28.247:3000/testTable
          .then((response) => response.text())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    
      render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <Text>{this.state.dataSource}</Text>
          </View>
        );
      }
    }*/


   