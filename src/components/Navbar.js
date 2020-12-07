import Logo from '../assets/logo.svg'
import styles from './Navbar.module.css'
import NavButton from './NavButton'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt="Windbnb"/>
            <NavButton />
        </nav>
    )
}

export default Navbar