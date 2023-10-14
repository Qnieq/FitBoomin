import { usePurchaseNow } from "../../../hooks/usePurchaseNow";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import PaymentDetail from "./payment-detail/PaymentDetail";
import Footer from "../../ui/Footer/Footer";
import { Navigate } from "react-router-dom";

const Payment = () => {
    const {purchaseNow} = usePurchaseNow()
    if(purchaseNow.length == 0){
        return <Navigate to="/membership"/>
    }

    return (
        <>
            <TopBarWhite />
            <PaymentDetail item={purchaseNow}/>
            <Footer />
        </>
    );
}

export default Payment;