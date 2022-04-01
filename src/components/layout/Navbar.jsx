import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>
          <span className="navicon-color">
            <i className="fas fas-water p-1"></i>
          </span>MJS Dives
        </h1>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='divetypeinfo'>DiveType</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar