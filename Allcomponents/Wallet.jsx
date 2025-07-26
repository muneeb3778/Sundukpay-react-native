import React, { useContext } from 'react'
import BackgroundGraphic from '../assets/Background.png'
import walletcircleimg from '../assets/walletcircleimg.png'
import card from '../assets/Walletimages/Card.png'
// import LinearGradient from 'react-native-linear-gradient';
import { View ,Image,StyleSheet ,TouchableOpacity,Text, } from 'react-native';
import { AppContext } from './ContextApi';

const Wallet = () => {
const {QuickLogin,isQuickLogin ,setisQuickLogin}=useContext(AppContext)
 
  return (
   <View  style={{flex:1,position:"relative"}}>

    <Text onPress={()=>{setisQuickLogin(false)}}>
  <View>
    <Image source={BackgroundGraphic}
style={{height:600, width:600, position:"absolute", left:-300}} />
  </View>
  </Text>

  <Text onPress={()=>{setisQuickLogin(false)}}>
   <View>
    <Image source={walletcircleimg}
style={{height:700, width:390, position:"absolute", top:-340 , left:0 }} />
  </View>
  </Text>

<Text onPress={()=>{setisQuickLogin(false)}}>
   <View>
    <Image source={card}
style={{height:260, width:350, position:"absolute", left:15, top:4 }} />    
  </View>
</Text>

  <View >
    <Text style={{ position:"absolute", left:18, top:380, fontSize:40, fontFamily:'Helvetica', fontWeight:"900"}}>
        Your Digital Islamic Wallet
    </Text>
      <Text style={{ position:"absolute", left:19, top:480,fontSize:20,width:350, color:"gray", fontFamily:'Helvetica',}}>
        Seamless, secure, and smart payments mad easy
    </Text>
  </View>
  <View>
   {/* <TouchableOpacity
      style={{
        position: 'absolute',
        top: 550,
        left: 30,
      }}
    > */}
      {/* <LinearGradient
        colors={['#D4A852', '#AD7C20']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 340,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
        Login with Google
        </Text> 
      </LinearGradient>
    </TouchableOpacity> */}

     {/* <TouchableOpacity
      style={{
        position: 'absolute',
        top: 615,
        left: 30,
      }}
    > */}
      {/* <LinearGradient
        colors={['#D4A852', '#AD7C20']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 340,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Log in 
        </Text> 
      </LinearGradient>
    </TouchableOpacity>
  <TouchableOpacity
      style={{
        position: 'absolute',
        top: 680,
        left: 30,
      }}
      onPress={()=>{setisQuickLogin(true)}}
    >
      <LinearGradient
        colors={['black', 'black']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 340,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Quick Login 
        </Text> 
      </LinearGradient>
    </TouchableOpacity> */}
    {isQuickLogin==true?<QuickLogin/>:""}
    </View>
   </View>
  )
}

export default Wallet
