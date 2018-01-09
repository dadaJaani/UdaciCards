import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { addDeckToStorage, addCardToStorage, fetchDeckNamesFromStorage } from '../utils/api'

class AddDeck extends Component {
  state = {
    deckName: ''
  }

  addEntry = () => {
    const { deckName } = this.state

    console.log(deckName)

    // addDeckToStorage(deckName)
    addCardToStorage('Hi', JSON.stringify({
      card1: {
        question: 'Q1',
        answer: 'A1'
      },
      card2: {
        question: 'Q2',
        answer: 'A2'
      }
    }))

    // To check if it is working
    fetchDeckNamesFromStorage()
      .then((decks) => {
        console.log(decks)
        return this.setState({deckName})
      })

  }

  render () {

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <Text style={styles.heading}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder='Deck Name'
          autoCapitalize='words'
          onChangeText={(text) => this.setState({deckName: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.addEntry}>
            <Text style={styles.buttonText}>Add Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  heading: {
    fontSize: 45,
    textAlign: 'center'
  },
  input: {
    alignSelf: 'stretch',
    height: 75,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center'

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#eee'
  }
})
