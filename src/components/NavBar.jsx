import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router'
import './styles/NavBar.css'
import logo from '../assets/images/LogoWEB.png'

function NavBar() {
    return (
        <header className="header">
            <Link to="/" className="logo-title">
                <img src={logo} alt="BRANKITS Logo" />
                <h1>BRANKITS</h1>
            </Link>
            <nav className="nav">
                <NavLink to="/category/camisetas" className="nav-link">CAMISETAS</NavLink>
                <NavLink to="/category/pantalones" className="nav-link">PANTALONES</NavLink>
                <NavLink to="/category/botines" className="nav-link">BOTINES</NavLink>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar
