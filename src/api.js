const apiKey = process.env.REACT_APP_COMICVINE_API_KEY
const cors = 'https://cors-anywhere.herokuapp.com'
const URL = cors +'/https://comicvine.gamespot.com/api'

export async function getCharacters() {
  return await fetch(`${URL}/characters/?api_key=${apiKey}&limit=50&format=json`)
    .then(res => res.json())
    .then(data => data.results)
}

export async function getCharacter(id) {
  return await fetch(`${URL}/character/4005-${id}/?api_key=${apiKey}&format=json`)
    .then(res => res.json())
    .then(data => data.results)
}