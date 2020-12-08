import React, { Component } from 'react'
import Guests from './Guests';
import Locations from './Locations';
import styles from './MenuModal.module.css';
import ModalButtonBar from './ModalButtonbar';

class MenuModal extends Component {
    state = {
        active : 1,
        adultCount : 0,
        childrenCount : 0,
        guestCount : 0
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
            }))
            console.log('total '+ this.state.guestCount);
        }else{
            this.setState({
                childrenCount : data
            })
            this.setState((state, props) => ({
                guestCount : state.adultCount + state.childrenCount
            }))
            console.log('total '+ this.state.guestCount);
        }
        
    }

    render() {
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBlockOne}>
                        <ModalButtonBar guestCount={this.state.guestCount} active={this.state.active} onClick={this.onActiveChange}/>
                        {this.state.active === 1 ? (
                            <div className={styles.modalList}>
                                <Locations />
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
                        <button className={styles.btnSearch}>
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
