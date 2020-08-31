import React, {Component} from 'react';
import { StyleSheet,View,Text,FlatList} from 'react-native';


export default class App extends Component{

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.157.86:3003/Products'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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

              <View style={{backgroundColor:'#8FBC8F',padding:10,margin:10,borderRadius:10}}>
                <Text style={{color:'#fff', fontWeight:'bold'}}>
                  <Text style={{color:'#000000'}}>ชื่อแพ็คเกจ: {item.PName}</Text>{'\t'}  ราคา: {item.PPrice}</Text>
                
                <Text style={{color:'#fff'}}>ภาพ: {item.PPhoto}</Text>
             
              </View>

              } 
            />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});