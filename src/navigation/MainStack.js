import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import HomeStack from './HomeStack';

const MainStack = () => {
  
  return <NavigationContainer>

<HomeStack/>


  </NavigationContainer>;
};

export default MainStack;