import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackgroundGraphic from '../assets/Background.png';
import SundukPay from '../assets/Homeimages/sundukpay.png';
import HomeCard from '../assets/Homeimages/Homecard.png';


const HomePage = () => {
  
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Wallet')
    },1000);
  },[]);

  return (
    <View style={styles.container}>
      {/* Background Image Full Screen */}
      <Image source={BackgroundGraphic} style={styles.backgroundGraphic} resizeMode="cover" />

      {/* Logo */}
      <Image source={SundukPay} style={styles.sundukPay} resizeMode="contain" />

      {/* Cards */}
        <Image source={HomeCard} style={styles.homeCard} resizeMode="contain" />
    </View>
  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    alignItems: 'center',
  },
  backgroundGraphic: {
    position: 'absolute',
    top: 0,         
    left: -191,       
    width: 500,
    height: 500,
  },
  sundukPay: {

    marginTop: 150,
    width: 180,
    height: 100,
  },
  homeCard: {
    marginTop: 130,
    width: 390,
    height: 400,
    right:-60,
},
});
