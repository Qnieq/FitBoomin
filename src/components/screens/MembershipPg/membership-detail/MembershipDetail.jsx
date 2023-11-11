import {  useParams } from "react-router-dom";
import TopBarWhite from "../../../ui/TopBar/TopBarWhite";
import { useEffect } from "react";
import DetailsPurchase from "./details/DetailsPurchase";
import Review from "../../../ui/Review/Review";
import Footer from "../../../ui/Footer/Footer";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import styles from "./membershipDetail.module.css"

const MembershipDetail = () => {
    const { id } = useParams()
    
    const { isLoading, error, planId } = useSelector((state) => state.planId);

    const { getPlansById } = useActions();
    
    
    useEffect(() => {
        getPlansById(id)
    }, [getPlansById])
    
    return (
        <div className={styles.container}>
            <TopBarWhite />
            <DetailsPurchase item={planId} />
            <Review />
            <Footer />
        </div>
    );
}

export default MembershipDetail;