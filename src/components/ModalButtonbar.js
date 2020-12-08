import styles from './MenuModal.module.css'

const ModalButtonBar = ({active, onClick}) => {

    return (
        active === 1 ? (
            <div className={styles.modalButtons}>
                <button data-key='1' onClick={(e)=>onClick(e)} className={styles.button+' '+styles.buttonLocation+' '+styles.active}>
                    <div className={styles.buttonTitle}>LOCATION</div>
                    <div className={styles.buttonSubtitle}>Helsinki, Finland</div>
                </button>
                <button data-key='2' onClick={(e)=>onClick(e)} className={styles.button+' '+styles.buttonGuest}>
                    <div className={styles.buttonTitle}>GUEST</div>
                    <div className={styles.buttonSubtitle}>Helsinki, Finland</div>
                </button>
            </div>
        ) : (
            <div className={styles.modalButtons}>
                <button  data-key='1' onClick={(e)=>onClick(e)} className={styles.button+' '+styles.buttonLocation}>
                    <div className={styles.buttonTitle}>LOCATION</div>
                    <div className={styles.buttonSubtitle}>Helsinki, Finland</div>
                </button>
                <button  data-key='2' onClick={(e)=>onClick(e)} className={styles.button+' '+styles.buttonGuest+' '+styles.active}>
                    <div className={styles.buttonTitle}>GUEST</div>
                    <div className={styles.buttonSubtitle}>Helsinki, Finland</div>
                </button>
            </div>
        )
        
    )
}
export default ModalButtonBar