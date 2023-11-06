import styles from "./ProgItems.module.css"

const ProgItems = () => {
    return (
        <div className={styles.progList}>
            <div className={styles.progItem}>
                <div className={styles.progItem_icon}>
                    <img src="images/Black_biceps.png" alt="" />
                </div>
                <div className={styles.progItem_text}>
                    <h5>Personal Training</h5>
                    <p>
                        It’s a long estabilished fact that a <br />reader will be distracted by the readable content
                    </p>
                </div>
            </div>
            <div className={styles.progItem}>
                <div className={styles.progItem_icon}>
                    <img src="images/sport-dumbbell.png" alt="" />
                </div>
                <div className={styles.progItem_text}>
                    <h5>Workout Programs</h5>
                    <p>
                        It’s a long estabilished fact that a <br />reader will be distracted by the readable content
                    </p>
                </div>
            </div>
            <div className={styles.progItem}>
                <div className={styles.progItem_icon}>
                    <img src="images/sport-slim-waist.png" alt="" />
                </div>
                <div className={styles.progItem_text}>
                    <h5>Program & Diet</h5>
                    <p>
                        It’s a long estabilished fact that a <br />reader will be distracted by the readable content
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProgItems;