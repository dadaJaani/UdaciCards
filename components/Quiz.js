import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Quiz extends Component {

  state = {
    toDisplay: 'question',
    currentCard: 3,
    totalCards: 4,
  }

  switchMode = () => {
    if (this.state.toDisplay === 'question'){
      this.setState({
        toDisplay: 'answer',
      })
    } else {
      this.setState({
        toDisplay: 'question',
      })
    }
  }

  render () {

    if (this.state.toDisplay === 'question'){
      return (
        <View style={styles.container}>
          <Text style={styles.counter}> {this.state.currentCard} / {this.state.totalCards} </Text>

          <Text style={styles.question}> This is the Question </Text>

          <TouchableOpacity style={styles.buttonToggle} onPress={this.switchMode}>
            <Text style={styles.toggleButtonText}>Answer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCorrect}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIncorrect}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.counter}> {this.state.currentCard} / {this.state.totalCards} </Text>

          <Text style={styles.question}> This is the Answer </Text>

          <TouchableOpacity style={styles.buttonToggle} onPress={this.switchMode}>
            <Text style={styles.toggleButtonText}>Question</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCorrect}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIncorrect}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }

  }
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  counter: {
    fontSize: 15,
    marginBottom: 30,
  },
  question: {
    fontSize: 45,
    textAlign: 'center'
  },
  answer: {
    fontSize: 45,
    textAlign: 'center'
  },
  buttonCorrect: {
    width: 150,
    height: 50,
    marginTop: 50,
    backgroundColor: '#008100',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonIncorrect: {
    width: 150,
    height: 50,
    marginTop: 30,
    backgroundColor: '#800',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonToggle: {
    borderRadius: 8,
    justifyContent: 'center',
  },
  toggleButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#432'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#eee'
  }
})
