import React, { Component } from 'react'
import styles from './MenuModal.module.css';
import ModalButtonBar from './ModalButtonbar';

class MenuModal extends Component {
    state = {
        active : 1
    }

    onActiveChange = (e) => {
        const key = e.currentTarget.dataset.key;
        this.setState({
            active : parseInt(key)
        })
    }

    render() {
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBlockOne}>
                        <ModalButtonBar active={this.state.active} onClick={this.onActiveChange}/>
                        {this.state.active === 1 ? (
                            <div className={styles.modalList}>
                                <div>Item Location</div>
                                <div></div>
                            </div>
                            
                        ) : (
                            <div className={styles.modalList}>
                                <div></div>
                                <div>Item Guest</div>
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
