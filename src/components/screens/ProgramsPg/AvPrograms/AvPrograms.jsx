import ProgItems from "../../../ui/ProgItems/ProgItems";
import styles from "./AvPrograms.module.css"

const AvPrograms = () => {
    return (
        <div className={styles.programs}>
            <div className={styles.cart}>
                <div className={styles.title}>
                    <div className={styles.chips}>
                        <h6>Programs</h6>
                    </div>
                    <div className={styles.aplication}>
                        <h2>Browse Our Available <br /> Programs</h2>
                    </div>
                </div>
                <ProgItems />
            </div>
        </div>
    );
}

export default AvPrograms;