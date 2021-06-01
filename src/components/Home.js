import { Link } from 'react-router-dom'

function Home() {
  return (
    <article className="col-xl-7 col-lg-8 col-md-8 col-sm-10 col-xm-12 text-center">
      <div className="mb-5">
        <h1>Welcome to this site where you can see some comic world characters</h1>
      </div>
      <p><Link to="/table">Take a look</Link> at the characters!</p>
    </article>
  )
}
 
export default Home