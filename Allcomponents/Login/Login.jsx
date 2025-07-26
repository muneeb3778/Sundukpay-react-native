import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UAEPassModal from './UaePassModal';
import { useState } from 'react';

// IMAGES 
import Flag from '../../assets/Loginimages/flag.png';
const BackgroundGraphic = require('../../assets/Background.png')
const Fingerprint = require('../../assets/Loginimages/fingerprint.png')


const LoginScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Graphic */}
      <Image
        source={BackgroundGraphic}
        style={styles.backgroundImage}
      />

      {/* Title */}
      <Text style={styles.heading}>Log In to</Text>
      <Text style={styles.heading} className='bg-red text-normal'>SundukPay</Text>
      <Text style={styles.subtext}>
        Please Enter your Phone Number to Log In.
      </Text>
      
      {/* Phone Input */}
      <View style={styles.phoneInputContainer}>
        <Image source={Flag} style={styles.flagIcon} />
        <Text style={styles.countryCode}>+971</Text>
        <TextInput
          placeholder="12 345 6789"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          style={styles.textInput}
        />
      </View>

      {/* UAE PASS Login */}
          <LinearGradient
              colors={['#D4A852', '#AD7C20']} // gold gradient shades
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.uaePassButton}
          >
              <TouchableOpacity style={styles.uaePassButtonInner} onPress={()=>setModalVisible(true)} activeOpacity={0.8}>
                <Image source={Fingerprint} style={styles.uaePassImage} />
                  <Text style={styles.uaePassText}>Log In with UAE PASS</Text>
              </TouchableOpacity>

              <UAEPassModal visible={modalVisible} onClose={()=>setModalVisible(false)}/>
          </LinearGradient>

      {/* Sign Up Text */}
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 25,
    paddingHorizontal: 24,
  },
  backgroundImage: {
    height: 500,
    width: 500,
    position: 'absolute',
    left: -250,
    top: 0,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  subtext: {
    fontSize: 14,
    color: '#6A6A6A',
    marginTop: 4,
    marginBottom: 24,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 11,
    marginBottom: 20,
  },
  flagIcon: {
    width: 40,
    height: 25,
    marginRight: 10,
    borderRadius: 5,
  },
  countryCode: {
    color: '#000',
    marginRight: 10,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  uaePassButton: {
    backgroundColor: '#d6a200',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  uaePassImage: {
    position:'absolute',
    width: 25,
    height: 25,
    left: -35,
  },
  uaePassText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 40,
    fontSize: 14,
  },
  signupLink: {
    color: '#d6a200',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    top: 280,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nextText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'600',
},
});