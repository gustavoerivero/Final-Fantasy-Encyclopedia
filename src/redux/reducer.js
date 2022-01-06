import { TOGGLE_FAVORITE } from "./actions"

const initialData = {
  favorites: []
}

const characterReducer = (state = initialData, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let char = action.payload
      let characterFromFavorite = state.favorites.find((favCharacter) => char.id === favCharacter.id)
      return {
        ...state,
        favorites: characterFromFavorite
          ?
          [
            ...state.favorites.filter((characterFilter) => characterFilter.id !== characterFromFavorite.id)
          ]
          :
          [
            ...state.favorites, action.payload
          ]
      }
    default:
      return state
  }
}

export default characterReducer