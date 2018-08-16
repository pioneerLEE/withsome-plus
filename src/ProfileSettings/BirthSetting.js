import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import TextStyles from '../styles/TextStyle';

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
  pickerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  dateText: {
    fontSize: 18,
  },
});

class BirthSetting extends React.Component {
  static navigationOptions = {
    title: '프로필',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      day: '1일',
      month: '1월',
      year: '1990년',
    };
  }

  // The function made by Aditya Singh
  // Original at https://bit.ly/2vOqIm6
  range = (start, end) => {
    return Array.from({ length: ((end + 1) - start) }, (v, k) => k + start);
  };

  setDate = (value, index, type) => {
    this.setState({
      [type]: value,
    });
  };

  // TODO: day 콤보 박스 item에 월별 마지막 일자 구해서 출력하기. (day.js)
  render() {
    const { navigation } = this.props;
    const { day, month, year } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer} onPress={() => this.setDate()}>
          <Text style={TextStyles.h1Text}>생년월일</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={year}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'year')}
            >
              {this.range(1990, 2000).map((y) => {
                const yearString = `${y}년`;
                return (<Picker.Item key={y} label={yearString} value={yearString} />);
              })}
            </Picker>
            <Picker
              selectedValue={month}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'month')}
            >
              {this.range(1, 12).map((m) => {
                const monthString = `${m}월`;
                return (<Picker.Item key={m} label={monthString} value={monthString} />);
              })}
            </Picker>
            <Picker
              selectedValue={day}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'day')}
            >
              <Picker.Item label="1일" value="1일" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('')}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default BirthSetting;
