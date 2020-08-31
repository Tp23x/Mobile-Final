import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, Image,Alert,ScrollView,FlatList,} from 'react-native';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Garden",  price:"$ 150", image:"https://www.img.in.th/images/433ab7d1295d76646dbd1e4d259965a3.jpg"},
        {id:2, title: "Toompang",  price:"$ 150", image:"https://www.img.in.th/images/91b1be9e82702286452203a075b0eec8.jpg"} ,
        {id:3, title: "Lunch",  price:"$ 75", image:"https://www.img.in.th/images/9e4d33171f235c3635c08977acb100ee.jpg"}, 
        {id:4, title: "Dinner",  price:"$ 200", image:"https://www.img.in.th/images/9b9443619c0d362aef6c72066955d56e.jpg"}, 
        {id:5, title: "Garden",  price:"$ 50", image:"https://www.img.in.th/images/7f743661b1871e85862d72bea876444e.jpg"}, 
        {id:6, title: "PGarden",  price:"$ 50", image:"https://www.img.in.th/images/b0d161882d81941edc8817849be4de33.jpg"}, 
        {id:7, title: "Garden",  price:"$ 200", image:"https://www.img.in.th/images/5596221338468a89d09ef57f494d4be5.jpg"}, 
        {id:8, title: "Garden",  price:"$ 80", image:"https://www.img.in.th/images/b37c201a10c5558022afcba2a63da38f.jpg"},
        {id:9, title: "Garden",  price:"$ 80", image:"https://www.img.in.th/images/21f9d44b33adec59b77d49122fd8bd69.jpg"},
        {id:9, title: "Garden", price:"$ 80", image:"https://lorempixel.com/400/200/nature/5/"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Booking</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   