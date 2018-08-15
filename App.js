import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/components/Landing';
import Signin from './src/components/Signin';

const AppNavigator = createStackNavigator({
  LandingScreen: { screen: Landing },
  SigninScreen: { screen: Signin }
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
