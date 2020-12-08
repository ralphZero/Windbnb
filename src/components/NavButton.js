import styles from './NavButton.module.css'

const NavButton = ({location, guestCount, onSearch, onOpen}) => {

    function handleModalOpen(e){
        const type = e.currentTarget.dataset.key;
        onOpen(type);
    }

    const guest = guestCount === 0 ? ('Add guest') : (guestCount === 1 ? (guestCount+' guest') : (guestCount+' guests'));
    const guestColor = guestCount === 0 ? ({color : '#bdbdbd'}) : null
    const place = location ? (location) : ('Add location');
    const locationColor = location ? null : ({color : '#bdbdbd'})

    return (
        <div className={styles.container}>
            <span data-key='city' onClick={(e) => handleModalOpen(e)} className={styles.input+' '+styles.inputCity} style={locationColor}>{place}</span>
            <span data-key='guest' onClick={(e) => handleModalOpen(e)} className={styles.input+' '+styles.inputGuest} style={guestColor}>{guest}</span>
            <button className={styles.btnSearch}>
                <span className={'material-icons '+styles.icon}>search</span>
            </button>
        </div>
    )
}

export default NavButton