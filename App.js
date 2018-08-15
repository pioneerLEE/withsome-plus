import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/Landing';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import EmailVerification from './src/SignUp/EmailVerification';

const AppNavigator = createStackNavigator({
  LandingScreen: { screen: Landing },
  SignInScreen: { screen: SignIn },
  SignUpScreen: { screen: SignUp },
  EmailVerificationScreen: { screen: EmailVerification },
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
