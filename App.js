/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/Landing';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import EmailVerification from './src/SignUp/EmailVerification';
import PasswordSetting from './src/SignUp/PasswordSetting';
import Greeting from './src/SignUp/Greeting';
import NameSetting from './src/ProfileSettings/NameSetting';
import SexSetting from './src/ProfileSettings/SexSetting';
import BirthSetting from './src/ProfileSettings/BirthSetting';
import PicturesSetting from './src/ProfileSettings/PicturesSetting';
import BioSetting from './src/ProfileSettings/BioSetting';
import TagSetting from './src/ProfileSettings/TagSetting';
import Main from './src/Main';

const AppNavigator = createStackNavigator({
  LandingScreen: { screen: Landing },
  SignInScreen: { screen: SignIn },
  SignUpScreen: { screen: SignUp },
  EmailVerificationScreen: { screen: EmailVerification },
  PasswordSettingScreen: { screen: PasswordSetting },
  GreetingScreen: { screen: Greeting },
  NameSettingScreen: { screen: NameSetting },
  SexSettingScreen: { screen: SexSetting },
  BirthSettingScreen: { screen: BirthSetting },
  PicturesSettingScreen: { screen: PicturesSetting },
  BioSettingScreen: { screen: BioSetting },
  TagSettingScreen: { screen: TagSetting },
  MainScreen: { screen: Main },
}, {
  initialRouteName: 'MainScreen',
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
