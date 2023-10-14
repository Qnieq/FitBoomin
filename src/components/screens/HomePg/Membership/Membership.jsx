import styles from "./Membership.module.css"
import Plan from "../../../ui/Plan/Plan";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";

const Membership = () => {

    const { isLoading, error, plan } = useSelector((state) => state.plan);

    const { getPlans } = useActions();

    useEffect(() => {
        getPlans()
    }, [getPlans])
    
    console.log(plan)
    return (
        <div className={styles.membership}>
            <div className={styles.cart}>
                <div className={styles.title}>
                    <div className={styles.chips}>
                        <h6>Membership</h6>
                    </div>
                    <div className={styles.aplication}>
                        <h2>Crushing your health and fitness goals starts here...</h2>
                    </div>
                </div>
                <div className={styles.plan}>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>{error.message}</div>
                    ) : plan ? (
                        <>{plan.map(item => <Plan key={item.id} item={item}/>)}</>
                    ) : (
                        <h1>USER NOT FOUND</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Membership;