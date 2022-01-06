export const FINAL_FANTASY_API_URL = 'https://www.moogleapi.com/api/v1/'
export const CHARACTER = (name) => { return FINAL_FANTASY_API_URL + `characters/search?name=${name}` }
export const MONSTER = (name) => { return FINAL_FANTASY_API_URL + `monsters/search?name=${name}` }