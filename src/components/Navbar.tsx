import { NavLink } from "react-router"
import styles from "./Navbar.module.css"
import burguer from "../assets/burgermenu.svg"

interface NavbarProps {
    mobile?: boolean
}

export default function Navbar({mobile}: NavbarProps) {
    return (
        <nav className={styles.navBar}>
            <NavLink to="/">/home</NavLink>
            <ul className={styles.fullScreenNav}>
                <li><NavLink to="/">work</NavLink></li>
                <li><NavLink to="/">about</NavLink></li>
                <li><NavLink to="/">contact</NavLink></li>
            </ul>
            {/* <div className={styles.smallScreenNav}>
                <img src={burguer} alt="Hamburguer menu" className={styles.burguer}></img>
            </div> */}
        </nav>
    )
}