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
    marginTop: 160,
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  control: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
  },
  pwControlText: {
    marginTop: 30,
  },
  buttonContainer: {
    flex: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20,
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

class Signin extends React.Component {
  static navigationOptions = {
    title: '로그인',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.controlContainer}>
            <Text style={styles.controlText}>이메일</Text>
            <TextInput style={styles.control} />
            <Text style={[styles.controlText, styles.pwControlText]} secureTextEntry>비밀번호</Text>
            <TextInput style={styles.control} />
          </View>
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

export default Signin;
