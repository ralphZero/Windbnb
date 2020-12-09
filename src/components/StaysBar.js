const StaysBar = ({count}) => {
    const stays = count === 0 ? ('No stays') : (count === 1 ? (count+' stay') : (count+' stays'))
    return (
        <div className='staybar'>
            <span className='staybar-title'>Stays in Finland</span>
            <span className='staybar-count'>{stays}</span>
        </div>       
    )
}

export default StaysBar