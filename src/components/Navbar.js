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
        //console.log('count is '+count);
        this.setState((state, props) => ({
            guests : count
        }))
    }

    onModalStateChanged = (value) => {
        //console.log('new value' + value);
        this.setState((state, props) => ({
            modalIsShowing : value
        }))
    }
    onSearch = (location, guest) => {
        this.props.onQuerySearch(location, guest)
    }

    render(){
        return (
            <nav className={styles.navbar}>
                <a href={'/'}><img src={Logo} alt="Windbnb"/></a>
                <NavButton location={this.state.city} guestCount={this.state.guests} onOpen={this.handleModalOpen} onSearch={this.onSearch} />
                <MenuModal isOpen={this.state.modalIsShowing} 
                    active={this.state.activeTab} 
                    onLocation={this.onLocationChanged} 
                    onGuestData={this.onGuestDataChanged} 
                    onModalStateChanged={this.onModalStateChanged}
                    onSearch={this.onSearch}
                />
            </nav>
        )
    }
}

export default Navbar