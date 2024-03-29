import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Dimensions,
    Keyboard,
    Alert,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
  } from 'react-native-responsive-dimensions';
  import IconButton from '../component/Button/IconButton';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import NumberInputView from '../component/input/NumberInputView';
import SecureInput from '../component/input/SecureInput';
import WishListInput from '../component/input/WishListInput';
import { BASE_URL } from '../../config';
import axios from 'axios';
//   import {BASE_URL} from '../../config';
//   import axios from 'axios';
  const NumberInput = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    // const [inputValue, setInputValue] = useState('');

  
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setIsKeyboardOpen(true),
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setIsKeyboardOpen(false),
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
  
const isButtonDisabled = phoneNumber.length !== 10 || password.length < 3;

  
    const handleLogin = () => {
      const loginUrl = `${BASE_URL}method=login&mobile=${phoneNumber}&password=${password},
      `;
      axios
        .get(loginUrl)
        .then(response => {
          console.log('Login successful:', response.data.response.message);

  
  navigation.navigate("MyOrder")
  



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
  
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require('../../assets/img/otp_logo.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Enter email and password</Text>
          <Text style={styles.subHeading}>
            We need to verify you. 
          </Text>
  
          <View
            style={{
              marginTop: responsiveHeight(3),
              marginBottom: responsiveHeight(6),
            }}
            onPress={() => console.log('OTP Input pressed')}>
             <View style={{ marginTop: responsiveHeight(3) }}>
          <WishListInput
            placeholder="Phone Number"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="numeric"
            maxLength={10}
            icon={
              <MaterialCommunityIcons
                name="phone-outline"
                size={responsiveFontSize(3)}
                color="black"
              />
            }
          />
        </View>

        <View style={{ marginTop: responsiveHeight(3) }}>
          <SecureInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            keyboardType="default"
            icon={
              <MaterialCommunityIcons
                name="lock-outline"
                size={responsiveFontSize(3)}
                color="black"
              />
            }
          />
        </View>
          </View>
  
          {!isKeyboardOpen && (
            <View style={styles.buttonContainer}>
              <IconButton
                text="Login"
                backgroundColor="#c43c02ff"
                onPress={() => handleLogin()}
                icon={
                  <AntDesign
                    name="arrowright"
                    size={responsiveFontSize(2.3)}
                    color="#e1e8faff"
                  />
                }
                style={styles.button}
                disabled={isButtonDisabled}
              />
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default NumberInput;
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: 12,
      paddingBottom: 10,
      backgroundColor: '#FEFEFE',
    },
    img: {
      width: '100%',
      height: responsiveHeight(30),
      alignSelf: 'center',
    },
    heading: {
      fontSize: responsiveFontSize(2),
      color: '#37474fff',
      marginTop: responsiveHeight(2),
      fontWeight: '500',
      fontFamily: 'Poppins-Medium',
    },
    subHeading: {
      fontSize: responsiveFontSize(1.6),
      color: '#6f7a80ff',
      marginTop: responsiveHeight(1),
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      paddingHorizontal: 12,
    },
    button: {
      width: Dimensions.get('window').width - 24, 
    },
  });