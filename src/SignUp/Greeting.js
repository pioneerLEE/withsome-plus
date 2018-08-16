import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 30,
    paddingRight: 30,
  },
  topContainer: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH1: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textH2: {
    fontSize: 20,
    color: '#FFFFFF',
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

class Greeting extends React.Component {
  static navigationOptions = {
    header: null,
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
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ resizeMode: 'stretch' }}
          source={{ uri: 'https://thechive.files.wordpress.com/2017/10/your-phone-called-it-wants-a-new-wallpaper-36-photos-26.jpg?quality=85&strip=info&w=600' }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.textH1}>환영합니다!</Text>
              <Text style={styles.textH2}>이제 프로필을 설정해보세요.</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('NameSettingScreen')}>프로필 설정하기</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Greeting;
