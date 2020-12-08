import styles from './MenuModal.module.css';

const Guests = ({adult, children, onAdultCountUpdated}) => {

    let adultCount = adult
    let childrenCount = children

    function countingAdult(e){
        const key = e.currentTarget.dataset.key
        if(key === 'plus'){
            adultCount = adultCount + 1;
        }else{
            adultCount = adultCount > 0 ? (adultCount - 1) : (adultCount)
        }
        onAdultCountUpdated('adult', adultCount)
    }

    function countingChildren(e){
        const key = e.currentTarget.dataset.key
        if(key === 'plus'){
            childrenCount = childrenCount + 1;
        }else{
            childrenCount = childrenCount > 0 ? (childrenCount - 1) : (childrenCount)
        }
        onAdultCountUpdated('children', childrenCount)
    }

    return (
        <div className={styles.guests} style={{height : 230}}>
            <div className={styles.guestsTitle}>Adults</div>
            <div>Ages 13 or above</div>
            <div className={styles.counterContainer}>
                <button data-key='minus' onClick={(e) => {countingAdult(e)}} className={styles.btnCounter}>-</button>
                <span className={styles.counter}>{adult}</span>
                <button data-key='plus' onClick={(e) => {countingAdult(e)}} className={styles.btnCounter}>+</button>
            </div>
            <br /><br />
            <div className={styles.guestsTitle}>Children</div>
            <div>Ages 2 - 12</div>
            <div className={styles.counterContainer}>
                <button data-key='minus' onClick={(e) => {countingChildren(e)}} className={styles.btnCounter}>-</button>
                <span className={styles.counter}>{children}</span>
                <button data-key='plus' onClick={(e) => {countingChildren(e)}} className={styles.btnCounter}>+</button>
            </div>
        </div>
    )
}

export default Guests