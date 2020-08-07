import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './components/list';

//get rid of remote debugger warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <MovieList />
  );
}
