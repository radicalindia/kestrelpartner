import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import MyOrder from './src/screens/MyOrder';
import NumberInput from './src/screens/NumberInput';
import MainStack from './src/navigation/MainStack';
import OrderDetail from './src/screens/OrderDetail';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex:1}}>
      {/* <MyOrder/> */}
      {/* <NumberInput/> */}
      <MainStack/>
      {/* <OrderDetail/> */}
    </View>
  )
}

export default App
