import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useEffect, useState} from 'react';
import axios from "axios";

export default function App() {
  const REACT_APP_API_URL = 'https://api.kanye.rest'
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    axios
    .get(REACT_APP_API_URL)
    .then(data => setQuotes(data.data.quote))
    .catch(error => console.log(error));
    };

  return (
    <View style={styles.container}>
    <View style={styles.minicontainer}>
      <Text style={{color : 'white'}}>{quotes}</Text>    
      <Button
        onPress={() => {getQuote()}}
        title="Change Quote"
        color="#2A3990"
      />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  minicontainer: {
    marginHorizontal: 85,
    marginVertical:320,
    backgroundColor:"#9C254D",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    flex: 1, justifyContent: 'center', alignItems: 'center' 
  },
  container: {
    flex : 1,
    backgroundColor:"#D23369",
  },
});
