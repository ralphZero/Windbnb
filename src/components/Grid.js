import sheet from './Grid.module.css'

const Grid = ({data}) => {
    
    const dataList = data ? (
        data.map(stay => {
            const superHost = stay.superHost ? (<span className={sheet.stay_info_superhost}>{'super host'.toUpperCase()}</span>) : null
            
            return (
                <div key={Math.random()} className={sheet.stay_item}>
                    <div className={sheet.stay_img_wrapper}>
                        <img className={sheet.stay_img} src={stay.photo} alt="stay"/>
                    </div>
                    <div className={sheet.stay_info}>
                        {superHost}
                        <span className={sheet.stay_info_type}>{stay.type}</span>
                        <span className={sheet.stay_info_rating}>
                            <span className={'material-icons '+sheet.stay_info_rating_star}>star</span>
                            <span>{stay.rating}</span>
                        </span>
                    </div>
                    <div className={sheet.stay_desc}>{stay.title}</div>
                </div>
            )
        })
    ) : null

    return (
        <div className={sheet.container}>
            {dataList}
        </div>
    )
}
export default Grid