import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const UaePassModal = ({ visible, onClose }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalContainer}>
              {/* Handle bar */}
              <View style={styles.handleBar} />

              {/* UAE PASS Logo */}
              <View style={styles.logoWrapper}>
                <Image
                  source={require('../../assets/Loginimages/Uaepass.png')}
                  style={styles.uaeLogo}
                  resizeMode="contain"
                />
              </View>

              {/* Input */}
              <TextInput
                style={styles.input}
                placeholder="Emirates ID, Email or Phone"
                placeholderTextColor="#999"
                value={inputValue}
                onChangeText={setInputValue}
              />

              {/* Remember Me */}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  tintColors={{ true: '#000', false: '#999' }}
                />
                <Text style={styles.checkboxLabel}>Remember Me</Text>
              </View>

              {/* Login Button */}
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UaePassModal;


const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#FBF6EE',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
  },
  handleBar: {
    width: 80,
    height: 6,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 24,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uaeLogo: {
    width: 300,
    height: 70,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 16,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'600',
},
});
