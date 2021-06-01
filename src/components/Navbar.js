import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">

        <Link to="/" className="title ps-3 navbar-brand text-danger">
          <span className="text-primary">komik</span> kings
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="btn text-primary">Home</Link>
            <Link to="/table" className="btn text-primary">Table</Link>
            <Link to="/about" className="btn text-primary">About</Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar