import { Component } from 'react'
import Logo from '../assets/logo.svg'
import MenuModal from './MenuModal'
import styles from './Navbar.module.css'
import NavButton from './NavButton'

class Navbar extends Component {
    state = {
        modalActive : 1
    }

    handleModalOpen = (type) => {
        console.log('You have clicked on '+type);
        
    }

    render(){
        return (
            <nav className={styles.navbar}>
                <img src={Logo} alt="Windbnb"/>
                <NavButton onOpen={this.handleModalOpen} />
                <MenuModal />
            </nav>
        )
    }
}

export default Navbar