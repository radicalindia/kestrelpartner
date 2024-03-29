import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MyOrderComponent = ({ onPressReceipt,data}) => {
  return (
    <View  style={styles.container}>
      <Image
        source={require('../../../assets/img/snacks.png')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data.order_date}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.textContainer}>
            <Text style={[styles.price, {color: '#333333',fontFamily: 'Poppins-SemiBold'}]}>₹ </Text>
            <Text style={[styles.price, {color: '#e8a468',fontFamily: 'Poppins-Regular'}]}>{data.amount} </Text>
            <Text style={[styles.price, {color: '#949998'}]}>| </Text>
            <Text style={[styles.price, {color: '#ff1814',fontFamily: 'Poppins-SemiBold'}]}>{data.orderStatus} </Text>
            <Text style={[styles.price, {color: '#949998'}]}>| </Text>
            <Text style={[styles.price, {color: '#a0a9b0',fontFamily: 'Poppins-Regular'}]}>OrderId: </Text>
            <Text style={[styles.price, {color: '#636363',fontFamily: 'Poppins-SemiBold'}]}>#{data.orderId}</Text>
          </Text>
          <TouchableOpacity
            onPress={onPressReceipt}
            style={styles.receiptContainer}>
            <Text style={styles.receiptText}>View Receipt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyOrderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#d9d9d9',
    paddingVertical:10
  },
  image: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '400',
    fontFamily: 'Poppins-SemiBold',
    // marginTop:30
  },
  priceContainer: {
    marginTop: 1,
  },

  price: {
    fontSize: responsiveFontSize(2),

    // color: '#f58b3bff',
    marginTop: 5,
    // fontWeight: '400',
    
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptContainer: {
    backgroundColor: '#d5d8de',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width:responsiveFontSize(11)
  },
  receiptText: {
    fontSize: responsiveFontSize(1.6),
    color: '#7c8187',
    // padding: 1,
    fontFamily: 'Poppins-Regular',
  },
});
