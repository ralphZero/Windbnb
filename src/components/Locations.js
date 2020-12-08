import styles from './MenuModal.module.css'

const Locations = ({locationId, onLocationChanged}) => {

    const list = [
        {id : 0, city : 'Helsinki, Finland'},
        {id : 1, city : 'Turku, Finland'},
        {id : 2, city : 'Oulu, Finland'},
        {id : 3, city : 'Vaasa, Finland'}
    ]

    const locations = list.map(location => {
        return (
            <div className={styles.location} style={locationId != null && locationId === location.id ? ({color : '#EB5757'}) : null} key={location.id} onClick={(e) => {onLocationChanged(location.id, location.city)}}>
                <span className='material-icons'>place</span>
                <span>{location.city}</span>
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