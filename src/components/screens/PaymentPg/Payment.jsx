import { usePurchaseNow } from "../../../hooks/usePurchaseNow";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import PaymentDetail from "./payment-detail/PaymentDetail";
import Footer from "../../ui/Footer/Footer";
import { Navigate } from "react-router-dom";
import styles from "./payment.module.css"
import { withAuth } from "../../HOC/withAuth";

const Payment = () => {
    const {purchaseNow} = usePurchaseNow()
    if(purchaseNow.length == 0){
        return <Navigate to="/membership"/>
    }

    return (
        <div className={styles.container}>
            <TopBarWhite />
            <PaymentDetail item={purchaseNow}/>
            <Footer />
        </div>
    );
}

export default withAuth(Payment);