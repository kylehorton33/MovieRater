import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovieList(props) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.122:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization' : `Token a4db63b236737f5d5fe06163a57b83a797ab55e7`
      }
    })
    .then( resp => resp.json())
    .then( jsonResp => setMovies(jsonResp) )
    .catch( err => console.log(err));
  }, [])

  const movieClicked = (movie) => (
    props.navigation.navigate("Detail", {movie:movie})
  )

  return (


    <View>

      <Image source={require('../assets/logo.png')}
        style={{width: '100%', height: 135, paddingTop: 30}}
        resizeMode="contain"
      />

      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => movieClicked(item)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          
        )}
        keyExtractor={(item,index) => index.toString()}
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
