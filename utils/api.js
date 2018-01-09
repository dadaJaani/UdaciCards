import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './_decks'

export function fetchDeckFromStorage ( deckName ) {
  let temp = AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  // to do
  return temp
}

export function fetchDeckNamesFromStorage () {
  let temp = AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (val) => (JSON.parse(val)))
  // to do after figuring out how to use the keys
  return temp
}

export function addDeckToStorage ( deckName ) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY,  JSON.stringify({
    [deckName]: {}
  }))
}

export function addCardToStorage ({ deckName, entry }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY,  JSON.stringify({
    [deckName]: entry
  }))
}
