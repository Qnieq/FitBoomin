import { Link } from "react-router-dom";
import styles from "./PlanMemb.module.css"

const PlanMemb = ({ item }) => {
    return (

        <div className={styles.plan_list}>
            <div className={styles.plan_item}>
                <div className={styles.plan_item_price}>
                    <h5>{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'narrowSymbol'
                    }).format(item.price)}<span>/Month</span></h5>
                    <h6>{item.type}</h6>
                </div>
                <div className={styles.plan_item_description}>
                    <p>
                        {item.about}
                    </p>
                </div>
            </div>
            <div className={styles.button_plan}>
                <Link to={`/membership/${item.id}`} className={styles.purchase}>Puchase Plan</Link>
            </div>
        </div>

    );
}

export default PlanMemb;