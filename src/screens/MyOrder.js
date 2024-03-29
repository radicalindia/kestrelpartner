import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import MyOrderComponent from '../component/myOrder/MyOrderComponent';
import Header from '../component/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import { BASE_URL } from '../../config';
import axios from 'axios';



const MyOrder = ({navigation}) => {
  const [data,setData]=useState([])
// console.log("data",data)

  const handleGet = () => {
    const url = `${BASE_URL}method=dashboard&partnerId=1
    `;
    axios
      .get(url)
      .then(response => {
        // console.log('Login successful:', response.data.order);
        setData(response.data.order)
       
      })
      .catch(error => {
        if (error.isAxiosError && !error.response) {
          // Network error
          Alert.alert('Network Error', 'Please check your internet connection.');
        } else {
          // Other errors
          console.error('Error adding item to cart:', error);
          Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
      });
  };

useEffect(()=>{
  handleGet()
},[])
if (data==""){
  return(
    <ActivityIndicator size='large' color="red"/>
  )
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            alignItems: 'center',
          }}>
          {/* <Header title="My Order" textColor="#ffffff" /> */}
    
          <View style={{height: responsiveHeight(6),alignItems:"center",justifyContent:"center"}}> 

          <Text style={styles.headerText}>My Order</Text>
          </View>

          <View style={styles.customerBg}>
            <Text style={styles.customerText}>Customer care</Text>
            <View style={styles.customerText}>
              <Ionicons
                name="call"
                size={responsiveWidth(3)}
                color="#37474fff"
              />
            </View>
          </View>
        </View>
      </View>
      
      <ScrollView>
        {data.map((item)=>(
          <MyOrderComponent key={item.orderId} data={item} onPressReceipt={()=>navigation.navigate("OrderDetail",{id:item.orderId})} />

        ))
          
        }
      
      </ScrollView>
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {backgroundColor: 'red'},
  customerBg: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },
  customerText: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    padding: 4,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    marginLeft: 10,
    color:"#37474fff",
    fontWeight: '700',
    // fontFamily:"Poppins-SemiBold",
    color:"#ffffff",

  },
});
