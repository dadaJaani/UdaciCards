import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, api } from 'react-native'


class AddCard extends Component {



  render () {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >

        <TextInput style={styles.input} placeholder='Question' autoCapitalize='words'/>
        <TextInput style={styles.input} placeholder='Answer' autoCapitalize='words'/>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Add Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',


  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#eee'
  }
})
