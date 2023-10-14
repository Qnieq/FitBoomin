import styles from "./Plan.module.css"
const PlanDescription = ({item}) => {
    return (
        <>
            <div className={styles.feature}>
                <img src="images/checkmark.png" alt="" />
                <h5>{item.features.classes}</h5>
            </div>
            <div className={styles.feature}>
                <img src="images/checkmark.png" alt="" />
                <h5>{item.features.pack}</h5>
            </div>
            <div className={styles.feature}>
                <img src="images/checkmark.png" alt="" />
                <h5>{item.features.training}</h5>
            </div>
        </>
    );
}

export default PlanDescription;