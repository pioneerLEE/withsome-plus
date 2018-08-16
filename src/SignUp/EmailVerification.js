import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
  },
  controlContainer: {
    marginTop: 180,
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  control: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0D0D0',
    borderBottomWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontSize: 17,
    color: '#000000',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    textDecorationLine: 'underline',
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
  }
});

class SignUp extends React.Component {
  static navigationOptions = {
    title: '회원가입',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.controlContainer}>
            <Text style={styles.controlText}>인증번호 (4자리)</Text>
            <TextInput style={styles.control} maxLength={4} keyboardType="numeric" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.resendText}>인증번호 다시 보내기</Text>
            <Text style={styles.infoText}>이메일을 인증하면 이용약관과 개인정보취급방침에 동의하는 것으로 간주합니다.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SignUp;
