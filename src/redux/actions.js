export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = (character) => ({
    type: TOGGLE_FAVORITE,
    payload: character,
})