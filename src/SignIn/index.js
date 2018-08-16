import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import InputForm from '../components/InputForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
    justifyContent: 'center',
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
  forgetTextContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
  },
  forgetText: {
    textDecorationLine: 'underline',
  },
});

class SignIn extends React.Component {
  static navigationOptions = {
    title: '로그인',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <InputForm title="이메일" type="email-address" />
          <InputForm title="비밀번호" secure />
          <View style={styles.forgetTextContainer}>
            <Text style={styles.forgetText}>비밀번호를 잊었나요?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SignIn;
