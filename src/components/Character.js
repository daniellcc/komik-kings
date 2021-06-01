import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../api'

function Character() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState({
    heroName: '',
    realName: '',
    publisher: '',
    details: '',
    info: '',
    img: ''
  })

  useEffect(() => {
    setLoading(true)
    
    getCharacter(id)
    .then(data => {
      setCharacter({
        heroName: data.name,
        realName: data.real_name,
        publisher: data.publisher.name,
        details: data.site_detail_url,
        info: data.deck,
        img: data.image.screen_url
      })
      setLoading(false)
      })
  }, [])

  return(
    <section className="col-xl-7 col-lg-8 col-md-8 col-sm-10 col-xm-12 text-center">
      <div>
        <h1 className="border-bottom border-4 border-danger">Character</h1>
        {
          loading 
          ? <p>Loading...</p> 
          : <div className="card">
              <img src={character.img} alt="" className="card-img-top"/>
              <div className="card-body">
                <p className="card-text">
                  <b>Real name:</b>  {character.realName ? character.realName : 'Unknow'}
                  </p>
                <p className="card-text">
                  <b>Hero name:</b> {character.heroName ? character.heroName : 'Unknow'}
                  </p>
                <p className="card-text"><b>Publisher:</b> {character.publisher}</p>
                <strong className="card-text">{character.info}</strong>
                <div className="py-3">
                  <a href={character.details}>More</a>
                </div>
              </div>
            </div>
        }
      </div>
    </section>
  )
}
 
export default Character