import { Component } from 'react'
import Logo from '../assets/logo.svg'
import styles from './Navbar.module.css'
import NavButton from './NavButton'

class Navbar extends Component {

    handleModalOpen = (type) => {
        console.log('You have clicked on '+type);
    }

    render(){
        return (
            <nav className={styles.navbar}>
                <img src={Logo} alt="Windbnb"/>
                <NavButton onOpen={this.handleModalOpen} />
            </nav>
        )
    }
}

export default Navbar