import styles from './NavButton.module.css'

const NavButton = (props) => {

    //const guestValue = 0;

    return (
        <div className={styles.container}>
            <span className={styles.input+' '+styles.inputCity}>Helsinki, Finland</span>
            <span className={styles.input+' '+styles.inputGuest} style={{color : 0xFFBDBDBD}}>Add guest</span>
            <button className={styles.btnSearch}>
                <span className={'material-icons '+styles.icon}>search</span>
            </button>
        </div>
    )
}

export default NavButton