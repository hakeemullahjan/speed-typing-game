import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';

import * as Router from '../components/index';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: Router.MainScreen,
    navigationOptions: {
      title: 'Typing Speed Test',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
    },
  },
  ChooseLevel: {
    screen: Router.ChooseLevel,
    navigationOptions: {
      title: 'Select Any Level',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
    },
  },
});

const MainNavigator = createSwitchNavigator({
  Auth: {
    screen: Router.LoginForm,
  },
  App: {
    screen: AppNavigator,
  },
  Tictoc: {
    screen: Router.Tictoc,
  },
  GameScreen: {
    screen: Router.GameScreen,
  },
  Result: {
    screen: Router.Result,
  },
});

export default createAppContainer(MainNavigator);
