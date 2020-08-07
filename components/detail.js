import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null);


  return (
    <View style={styles.container}>

      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.average_rating > 0 ? styles.orange : styles.white } icon={faStar}/>
        <FontAwesomeIcon style={movie.average_rating > 1 ? styles.orange : styles.white } icon={faStar}/>
        <FontAwesomeIcon style={movie.average_rating > 2 ? styles.orange : styles.white } icon={faStar}/>
        <FontAwesomeIcon style={movie.average_rating > 3 ? styles.orange : styles.white } icon={faStar}/>
        <FontAwesomeIcon style={movie.average_rating > 4 ? styles.orange : styles.white } icon={faStar}/>
        <Text style={styles.white}>({movie.number_of_ratings})</Text>
      </View>
      
      
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
}

Detail.navigationOptions = screenProps => ({
  //title: 'hi',
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor: '#444',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    justifyContent: 'center',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
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
  starContainer : {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orange : {
    color: 'orange',
  },
  white : {
    color: 'white',
  },
  description : {
    fontSize: 20,
    color: '#fff',
    padding: 10,
  }

});
