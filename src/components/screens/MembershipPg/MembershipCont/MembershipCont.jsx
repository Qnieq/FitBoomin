import styles from "./MembershipCont.module.css"
import PlanMemb from "./PlanMemb/PlanMemb";
import TableOverview from "./TableOverview/TableOverview";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";

const MembershipCont = () => {
    const { isLoading, error, plan } = useSelector((state) => state.plan);

    const { getPlans } = useActions();


    useEffect(() => {
        getPlans()
    }, [getPlans])

    return (
        <div className={styles.container}>
            <div className={styles.membership}>
                <div className={styles.cart}>
                    <div className={styles.title}>
                        <div className={styles.chips}>
                            <h6>Membership</h6>
                        </div>
                        <div className={styles.aplication}>
                            <h4>Compare Our Plane and Find Your</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.membership_content}>
                    <div className={styles.plan}>                    
                        {plan.map(item => <PlanMemb key={item.id} item={item}/>)}
                    </div>
                    <TableOverview />
                </div>
            </div>  
        </div>
    );
}

export default MembershipCont;