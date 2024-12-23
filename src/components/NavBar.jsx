import CartWidget from './CartWidget'
import { Link } from 'react-router'
import './styles/NavBar.css'
import logo from '../assets/images/LogoT.png'

function NavBar() {
  return (
    <header className="header">
      <Link to="/" className="logo-title">
        <img src={logo} alt="T-SMRKT Logo" />
        <h1>T-SMRKT</h1>
      </Link>
      <nav className="nav">
        <Link to="/category/groceries" className="nav-link">GROCERIES</Link>
        <Link to="/category/furniture" className="nav-link">FURNITURE</Link>
        <Link to="/category/fragrances" className="nav-link">FRAGRANCES</Link>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
