import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NumberInput from '../screens/NumberInput';
import MyOrder from '../screens/MyOrder';
import DetailScreen from '../screens/DetailScreen';
import OrderDetail from '../screens/OrderDetail';


const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainHome" component={NumberInput} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      
    </Stack.Navigator>
  );
};

export default HomeStack;