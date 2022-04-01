import { FaWater } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <FaWater className="navicon-color" size={30} />
        <h1 className='px-1'>MJS Dives</h1>
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