import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import WideFloatingButton from '../components/WideFloatingButton';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width - 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  carouselContainer: {
    width: sliderWidth,
    height: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankCarouselItem: {
    width: '100%',
    height: itemWidth,
    backgroundColor: '#DFDFDF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankCarouselItemText: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: 'bold',
  },
});

class PictureSetting extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    title: '프로필',
  };

  constructor(props) {
    super(props);

    this.state = {
      carouselItems: [
        {
          img: 'http://upload2.inven.co.kr/upload/2017/12/04/bbs/i15505567220.png',
        }, {
          img: '',
        }, {
          img: '',
        }, {
          img: '',
        },
      ],
    };
  }

  renderCarouselItem = ({ item }) => {
    if (item.img) {
      return (
        <View>
          <ImageBackground
            style={{ width: '100%', height: itemWidth }}
            imageStyle={{ resizeMode: 'cover' }}
            source={{ uri: item.img }}
            borderRadius={30}
          >
            <View />
          </ImageBackground>
        </View>
      );
    }
    return (
      <View style={styles.blankCarouselItem}>
        <Text style={styles.blankCarouselItemText}>+</Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { carouselItems } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.carouselContainer}>
            <Carousel
              data={carouselItems}
              renderItem={this.renderCarouselItem}
              itemWidth={itemWidth}
              sliderWidth={sliderWidth}
              itemHeight={itemWidth}
              sliderHeight={200}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('BioSettingScreen')}
          />
        </View>
      </View>
    );
  }
}

export default PictureSetting;
