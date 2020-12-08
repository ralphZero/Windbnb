import sheet from './Grid.module.css'

const Grid = (props) => {
    return (
        <div className={sheet.container}>
            <div className={sheet.stay_item}>
                <div className={sheet.stay_img_wrapper}>
                    <img className={sheet.stay_img} src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="stay"/>
                </div>
                <div className={sheet.stay_info}>
                    <span className={sheet.stay_info_superhost}>{'super host'.toUpperCase()}</span>
                    <span className={sheet.stay_info_type}>Entire apartment . 2 beds</span>
                    <span className={sheet.stay_info_rating}>
                        <span className={'material-icons '+sheet.stay_info_rating_star}>star</span>
                        <span>4.40</span>
                    </span>
                </div>
                <div className={sheet.stay_desc}>Stylist apartment in center of the city</div>
            </div>

            <div className={sheet.stay_item}>
                <div className={sheet.stay_img_wrapper}>
                    <img className={sheet.stay_img} src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="stay"/>
                </div>
                <div className={sheet.stay_info}>
                    <span className={sheet.stay_info_superhost}>{'super host'.toUpperCase()}</span>
                    <span className={sheet.stay_info_type}>Entire apartment . 2 beds</span>
                    <span className={sheet.stay_info_rating}>
                        <span className={'material-icons '+sheet.stay_info_rating_star}>star</span>
                        <span>4.40</span>
                    </span>
                </div>
                <div className={sheet.stay_desc}>Stylist apartment in center of the city</div>
            </div>

            <div className={sheet.stay_item}>
                <div className={sheet.stay_img_wrapper}>
                    <img className={sheet.stay_img} src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="stay"/>
                </div>
                <div className={sheet.stay_info}>
                    <span className={sheet.stay_info_superhost}>{'super host'.toUpperCase()}</span>
                    <span className={sheet.stay_info_type}>Entire apartment . 2 beds</span>
                    <span className={sheet.stay_info_rating}>
                        <span className={'material-icons '+sheet.stay_info_rating_star}>star</span>
                        <span>4.40</span>
                    </span>
                </div>
                <div className={sheet.stay_desc}>Stylist apartment in center of the city</div>
            </div>
        </div>
    )
}
export default Grid