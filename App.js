import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'


// import all the views or components
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Decks from './components/Decks'
import Quiz from './components/Quiz'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
