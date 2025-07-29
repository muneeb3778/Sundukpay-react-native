import React, { useContext } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { AppContext } from './ContextApi';
import BackgroundGraphic from '../assets/Background.png';
import walletcircleimg from '../assets/walletcircleimg.png';
import card from '../assets/Walletimages/Card.png';
import LinearGradient from 'react-native-linear-gradient';
import { Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const Wallet = () => {
  const { QuickLogin, isQuickLogin, setisQuickLogin } = useContext(AppContext);

  const navigation = useNavigation();


const googleLogin = async () => {
  const url = 'https://55b424ea2e16.ngrok-free.app/api/sunduk-service/custom-login';

  try {
    await Linking.openURL(url);  // ✅ Open the backend login URL
  } catch (err) {
    Alert.alert('Error', `Cannot open this URL: ${url}`);
  }
};



  return (
    <SafeAreaView style={[styles.container,{ backgroundColor: isQuickLogin ? 'rgba(0, 0, 0, 0.5)' : '#fff'}]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Image */}
        <Image source={BackgroundGraphic} style={styles.backgroundImage} resizeMode="cover" />

        {/* Wallet Circle */}
        <TouchableOpacity onPress={()=>{setisQuickLogin(false)}}>
        <Image source={walletcircleimg} style={styles.walletCircle} resizeMode="contain" />
        </TouchableOpacity>

        {/* Card Image */}
        <TouchableOpacity onPress={()=>{setisQuickLogin(false)}}>
        <Image source={card} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>

        {/* Heading & Description */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Digital Islamic Wallet</Text>
          <Text style={styles.subHeading}>
            Seamless, secure, and smart payments made easy
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Login with Google */}
          <TouchableOpacity
  activeOpacity={0.8}
  onPress={googleLogin}  // ✅ Put the onPress here
  style={{ marginBottom: 15 }}
>
  <LinearGradient
    colors={['#D4A852', '#AD7C20']}
    start={{ x: 0.2, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.linearButton}
  >
    <Text style={styles.buttonText}>Login with Google</Text>
  </LinearGradient>
</TouchableOpacity>


          {/* Log in */}
          <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 15 }}>
            <LinearGradient
              colors={['#D4A852', '#AD7C20']}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.linearButton}
            >
              <Text style={styles.buttonText} onPress={()=>{navigation.navigate("Loginscreen")}}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Quick Login */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setisQuickLogin(true)}
            style={styles.quickLoginButton}
          >
            <Text style={styles.buttonText}>Quick Login</Text>
            <Text style={{ color: '#fff', marginLeft: 8, fontSize: width * 0.05 }}>{'→'}</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Login Component */}
        {isQuickLogin && <QuickLogin />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  backgroundImage: {
  width: width * 1.8,
  height: width * 1.8,
  position: 'absolute',
  top: -width * 0.,
  left: -width,


  },
  walletCircle: {
    position: 'absolute',
    top: -(width * 1.80) / 2, // Half hide
    width: width * 1.95,
    height: width * 1.95,
    alignSelf: 'center',
  },
 cardImage: {
  width: width * 0.8,
  aspectRatio: 0.85,
  // position: 'absolute',
  top: -width * 0.10,  // adjust this value for perfect positioning
  alignSelf: 'center',
},



  textContainer: {
    width: width * 0.9,
    marginTop: 0,
  },
  heading: {
    fontSize: width * 0.090, // Responsive font
    fontWeight: '800',
    // textAlign: 'center',
    color: '#000',
  },
  subHeading: {
    fontSize: width * 0.045,
    // textAlign: 'center',
    color: '#6B7280',
    marginTop: 8,
  },
  buttonContainer: {
    width: width * 0.9,
    marginTop: 35,
  },
  linearButton: {
    height: width * 0.14, // Responsive height
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickLoginButton: {
    backgroundColor: 'black',
    height: width * 0.14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default Wallet;
