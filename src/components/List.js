import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getCharacters } from '../api'

function List() {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])

  const listItems = characters.map((char) =>
    <tr key={char.id}>
      <td>{char.real_name ? char.real_name : 'Unknow'}</td>
      <td>{char.name ? char.name : 'Unknow'}</td>
      <td><Link to={`/${char.id}`}>Details</Link></td>
    </tr>
  )
  
  useEffect(() => {
    setLoading(true)

    getCharacters()
      .then(chars => {
        setCharacters(chars)
        setLoading(false)
      })
  }, [])

  if(loading) return (<p>Loading...</p>)

  return (
    <table className="col table table-hover">
      <thead>
        <tr>
          <th scope="col">Real name</th>
          <th scope="col">Hero name</th>
          <th scope="col">See more</th>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  )
}
 
export default List