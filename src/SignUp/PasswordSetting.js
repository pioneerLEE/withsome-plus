import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
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
});

class PasswordSetting extends React.Component {
  static navigationOptions = {
    title: '회원가입',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <InputForm title="비밀번호" holder="6자 이상 입력해주세요" secure />
          <InputForm title="비밀번호 확인" holder="비밀번호를 다시 입력해주세요" secure />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('GreetingScreen')}>
            <Text style={styles.buttonText}>가입하기!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default PasswordSetting;
