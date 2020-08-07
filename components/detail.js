import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null)

  

  return (
    <View>

      <Text>Details about {movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item : {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35'

  },
  itemText : {
    color: '#fff',
    fontSize: 24,

  },
});
