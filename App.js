import React from 'react';
import MovieList from './components/list';
import Detail from './components/detail';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//get rid of remote debugger warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
  Detail: {screen: Detail},
})

const App = createAppContainer(AppNavigator);

export default App;
