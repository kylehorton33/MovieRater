import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MovieList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization' : `Token a4db63b236737f5d5fe06163a57b83a797ab55e7`
      }
    })
    .then( resp => resp.json())
    .then( jsonResp => setMovies(jsonResp) )
    .catch( err => console.log(err));
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <Text key={item.id}>{item.title}</Text>
        )}
      
      />
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
});
