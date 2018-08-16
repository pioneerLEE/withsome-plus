import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

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
  controlText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  radioContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  radioOption: {
    backgroundColor: '#D0D0D0',
    width: 140,
    height: 140,
    borderRadius: 140,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class SexSetting extends React.Component {
  static navigationOptions = {
    title: '프로필',
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
          <Text style={styles.controlText}>성별</Text>
          <View style={styles.radioContainer}>
            <TouchableOpacity>
              <View style={styles.radioOption}>
                <Text>Female</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.radioOption}>
                <Text>Male</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('BirthSettingScreen')}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SexSetting;
