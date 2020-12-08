import { Component } from 'react'
import Logo from '../assets/logo.svg'
import MenuModal from './MenuModal'
import styles from './Navbar.module.css'
import NavButton from './NavButton'

class Navbar extends Component {
    state = {
        modalIsShowing : false,
        activeTab : 1,
        guests : 0,
        city : ''
    }

    handleModalOpen = (type) => {
        console.log('You have clicked on '+type);
        type === 'city' ? (
            this.setState({
                modalIsShowing : true,
                activeTab : 1
            })
        ) : (
            this.setState({
                modalIsShowing : true,
                activeTab : 2
            })
        )
    }

    onLocationChanged = (city) => {
        this.setState({
            city : city
        })
    }

    onGuestDataChanged = (count) => {
        this.setState((state, props) => ({
            guests : state.guests + count
        }))
    }

    onModalStateChanged = (value) => {
        console.log('new value' + value);
        this.setState((state, props) => ({
            modalIsShowing : value
        }))
    }

    render(){
        return (
            <nav className={styles.navbar}>
                <img src={Logo} alt="Windbnb"/>
                <NavButton location={this.state.city} guestCount={this.state.guests} onOpen={this.handleModalOpen} />
                <MenuModal isOpen={this.state.modalIsShowing} 
                    active={this.state.activeTab} 
                    onLocation={this.onLocationChanged} 
                    onGuestData={this.onGuestDataChanged} 
                    onModalStateChanged={this.onModalStateChanged}
                />
            </nav>
        )
    }
}

export default Navbar