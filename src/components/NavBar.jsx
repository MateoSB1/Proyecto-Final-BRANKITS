import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router"
import "./styles/NavBar.css"
import logo from "../assets/images/LogoWEB.png"
import CartWidget from "./CartWidget"

function NavBar() {
    const [menuActive, setMenuActive] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuActive(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="BRANKITS Logo" className="logo-img" />
                <h1 className="logo-title">BRANKITS</h1>
            </Link>
            <nav className="nav" ref={menuRef}>
                <ul className={`nav-links ${menuActive ? "active" : ""}`}>
                    <li>
                        <NavLink to="/category/camisetas" className="nav-link">CAMISETAS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/pantalones" className="nav-link">PANTALONES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/botines" className="nav-link">BOTINES</NavLink>
                    </li>
                    {menuActive && (
                        <li className="cart-menu-item">
                            <CartWidget />
                        </li>
                    )}
                </ul>

                {!menuActive && <CartWidget />}

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
