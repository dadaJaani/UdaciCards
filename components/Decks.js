import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { fetchDeckNamesFromStorage } from '../utils/api'

function ListItem ({ displayText }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Text>{displayText}</Text>
    </TouchableOpacity>
  )
}

class Decks extends Component {
  state = {
    decks: []
  }

  componentDidMount () {

    // AsyncStorage.clear();

    
    fetchDeckNamesFromStorage()
      .then((decks) => {
        console.log(decks)
        console.log(Object.getOwnPropertyNames(decks))
        console.log(Object.keys(decks))
        return this.setState({decks})
      })

  }

  render () {

    console.log(this.state.decks)

    let data = [
      {
        key: 'Item 1'
      },
      {
        key: 'Item 2'
      }
    ]

    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <ListItem displayText={item.key}/>}
        />
      </View>
    )
  }
}

export default Decks

const styles = StyleSheet.create ({
  listItem: {
    height: 100,
    padding: 20,
    borderColor: '#bbb',
    borderBottomWidth: 1,
  },

})
