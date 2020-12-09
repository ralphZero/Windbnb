import React, { Component } from 'react'
import Guests from './Guests';
import Locations from './Locations';
import styles from './MenuModal.module.css';
import ModalButtonBar from './ModalButtonbar';

class MenuModal extends Component {
    state = {
        isShowing : false,
        active : 1,
        adultCount : 0,
        childrenCount : 0,
        guestCount : 0,
        location : '',
        locationId : null
    }

    componentDidUpdate(oldProps){
        if(this.props.isOpen !== oldProps.isOpen){
            this.setState((state, props) => ({
                isShowing : props.isOpen
            }))
        }
        if(this.props.active !== oldProps.active){
            this.setState({
                active : this.props.active
            })
        }
    }

    onActiveChange = (e) => {
        const key = e.currentTarget.dataset.key;
        this.setState({
            active : parseInt(key)
        })
    }

    onGuestDataChanged = (who, data) => {
        if(who === 'adult'){
            this.setState({
                adultCount : data
            })
            this.setState((state, props) => ({
                guestCount : state.adultCount + state.childrenCount
            }), () => {
                console.log('total '+ this.state.guestCount);
                this.props.onGuestData(this.state.guestCount)
            })
        }else{
            this.setState({
                childrenCount : data
            })
            this.setState((state, props) => ({
                guestCount : state.adultCount + state.childrenCount
            }), () => {
                console.log('total '+ this.state.guestCount);
                this.props.onGuestData(this.state.guestCount)
            })
        }
    }

    onLocationDataChanged = (id, city) => {
        this.setState({
            location : city,
            locationId : id
        }, () => {
            this.props.onLocation(city)
        })
    }

    onModalClosing = (e) => {
        const modal = document.querySelector('#modalContent')
        if(e.target === modal){
            this.closeModal(e.target);
        }
    }

    closeModal(target){
        target.firstChild.classList.toggle(styles.modalOut)
        setTimeout(() => {
            target.firstChild.classList.toggle(styles.modalOut)
        }, 500);
        setTimeout(() => {
            this.setState((state, props) => ({
                isShowing : state.isShowing ? (false) : (true)
            }), () => {
                this.props.onModalStateChanged(this.state.isShowing);
            })
        }, 450);
    }

    onSearch = (e) => {
        const modal = document.querySelector('#modalContent');
        this.closeModal(modal);
        const location = this.state.location;
        const count = this.state.guestCount;
        this.props.onSearch(location, count);
    }

    render() {
        return (
            <div id='modalContent' onClick={this.onModalClosing} className={styles.modal} style={this.state.isShowing ? ({display : "block"}) : ({display : "none"})}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBlockOne}>
                        <ModalButtonBar location={this.state.location} guestCount={this.state.guestCount} active={this.state.active} onClick={this.onActiveChange}/>
                        {this.state.active === 1 ? (
                            <div className={styles.modalList}>
                                <Locations locationId={this.state.locationId} onLocationChanged={this.onLocationDataChanged}/>
                                <div></div>
                            </div>
                            
                        ) : (
                            <div className={styles.modalList}>
                                <div></div>
                                <Guests adult={this.state.adultCount} children={this.state.childrenCount} onAdultCountUpdated={this.onGuestDataChanged} />
                            </div>
                            
                        )}
                    </div>
                    <div className={styles.modalBlockTwo}>
                        <button className={styles.btnSearch} onClick={this.onSearch}>
                            <span className='material-icons' style={{fontSize : 18}}>search</span>
                            <span style={{fontSize : 14}}>Search</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuModal
