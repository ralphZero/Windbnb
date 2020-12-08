import styles from './MenuModal.module.css'

const Locations = (props) => {

    const list = [
        'Helsinki, Finland',
        'Turku, Finland',
        'Oulu, Finland',
        'Vaasa, Finland'
    ]

    const locations = list.map(location => {
        return (
            <div className={styles.location} key={Math.random()}>
                <span className='material-icons'>place</span>
                <span>{location}</span>
            </div>
        )
    })

    return (
        <div style={{height : 230}}>
            {locations}
        </div>
    )
}

export default Locations