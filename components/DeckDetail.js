import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class DeckDetail extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Deck's Name </Text>
        <Text style={styles.subheading}>Number of cards in the deck</Text>
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Add Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  heading: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10
  },
  subheading: {
    fontSize: 25,
    textAlign: 'center',
    color: '#555',
    marginBottom: 150
  },
  button1: {
    width: 150,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
  },
  buttonText1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#eee'
  },
  button2: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#eee',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333'
  }
})
