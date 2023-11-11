import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import MembershipCont from "./MembershipCont/MembershipCont";
import styles from "./membershipCont.module.css"

const Membership = () => {
    return (
        <div className={styles.container}>
            <TopBarWhite />
            <MembershipCont />
            <Review />
            <Footer />
        </div>
    );
}

export default Membership;