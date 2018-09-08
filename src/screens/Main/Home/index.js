/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SwipeCards from 'react-native-swipe-cards';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardContainer: {
    flex: 1,
    width: 500,
    height: 500,
  },
  pictureCard: {
    flex: 1,
  },
  profilePicture: {
    height: deviceHeight,
  },
  pictureTopContainer: {
    flex: 9,
  },
  pictureBottomContainer: {
    flex: 2,
  },
  profileCard: {
    height: deviceHeight,
    padding: 30,
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: '홈',
  };

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          img: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg',
        }, {
          img: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg',
        }, {
          img: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg',
        }, {
          img: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg',
        },
      ],
    };
  }

  renderCarouselItem = ({ item }) => {
    return (
      <ScrollView style={styles.cardContainer}>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: `${item.img}` }}
        >
          <View style={styles.pictureCard}>
            <View style={styles.pictureTopContainer} />
            <View style={styles.pictureBototmContainer} />
          </View>
        </ImageBackground>
        <View style={styles.profileCard}>
          <Text>김뫄뫄</Text>
          <Text>아주대학교 미디어학과 17학번</Text>
        </View>
      </ScrollView>
    );
  }

  renderCard = () => {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg' }}
        >
          <View style={styles.pictureCard}>
            <View style={styles.pictureTopContainer} />
            <View style={styles.pictureBototmContainer} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  renderNoMoreCards = () => {
    return <Text>test</Text>;
  }

  handleYup = () => {
    console.log('yup');
  }

  handleNope = () => {
    console.log('nope');
  }

  render() {
    const { cards } = this.state;

    return (
      <View style={styles.container}>
        <SwipeCards
          cards={cards}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
      </View>
    );
  }
}

export default Home;
