import styles from './NavButton.module.css'

const NavButton = (props) => {
    return (
        <div className={styles.container}>
            <input className={styles.input+' '+styles.inputCity} name='city' type="text" value='Helsinki, Finland'/>
            <input className='input input-guest' name='guest' type="text" placeholder='Add guest'/>
            <button className='btn-search'>
                <span className='material-icons'>search</span>
            </button>
        </div>
    )
}

export default NavButton