import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import BackgroundGraphic from '../assets/Background.png';


const { width, height } = Dimensions.get('window');

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    fetch('https://d3024265734c.ngrok-free.app/api/sunduk-service/custom-login', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not logged in');
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        Alert.alert('Error', 'Not logged in');
      });
  }, []);

  const indexing = userdata.fullName ? userdata.fullName[0].toUpperCase() : '';

  return (
    <View style={styles.container}>
        {/* Background Image Full Screen */}
              <Image
                source={BackgroundGraphic}
                style={styles.backgroundGraphic}
                resizeMode="cover"
              />
        
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <ArrowLeft size={20} /> */}
      </TouchableOpacity>

      <Text style={styles.headerText}>Add Card</Text>
    </View>
  
      {/* Profile Image Section */}
      <View style={styles.profileWrapper}>
        <View style={styles.imageContainer}>
          {userdata.image ? (
            <Image source={{ uri: userdata.image }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>{indexing}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.editImageBtn}>
          {/* <Feather name="edit-2" size={16} color="#fff" /> */}
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.infoSection}>
        <Text style={styles.userName}>{userdata.fullName || 'Testing name'}</Text>

        <View style={styles.infoRow}>
          {/* <MaterialIcons name="call" size={20} color="#000" /> */}
          <Text style={styles.infoText}>{userdata.phonenumber || '‪+91 90961 23103‬'}</Text>
        </View>

        <View style={styles.infoRow}>
          {/* <MaterialIcons name="email" size={20} color="#000" /> */}
          <Text style={styles.infoText}>{userdata.email || 'testinguser@email.com'}</Text>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtnText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  backgroundGraphic: {
    position: 'absolute',
    top: 0,
    left: -250,
    width: 500,
    height: 500,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    height: 72,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 390,
    zIndex: 999,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
    marginLeft: -20,
  },
  profileWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    width: 164,
    height: 164,
    borderRadius: 82,
    overflow: 'hidden',
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D4A852',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
  },
  editImageBtn: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 12,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
  infoSection: {
    marginTop: 30,
    alignItems: 'center',
    gap: 12,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 4,
  },
  infoText: {
    fontSize: 15,
    color: '#000',
  },
  editBtn: {
    position: 'absolute',
    bottom: 30,
    width: width * 0.85,
    height: 48,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'600',
},
});
