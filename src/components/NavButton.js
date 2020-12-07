import styles from './NavButton.module.css'

const NavButton = ({onSearch, onOpen}) => {

    function handleModalOpen(e){
        const type = e.currentTarget.dataset.key;
        console.log(type);
    }

    return (
        <div className={styles.container}>
            <span data-key='city' onClick={(e) => handleModalOpen(e)} className={styles.input+' '+styles.inputCity}>Helsinki, Finland</span>
            <span data-key='guest' onClick={(e) => handleModalOpen(e)} className={styles.input+' '+styles.inputGuest} style={{color : 0xFFBDBDBD}}>Add guest</span>
            <button className={styles.btnSearch}>
                <span className={'material-icons '+styles.icon}>search</span>
            </button>
        </div>
    )
}

export default NavButton