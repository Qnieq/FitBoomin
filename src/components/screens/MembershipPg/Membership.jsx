import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import MembershipCont from "./MembershipCont/MembershipCont";

const Membership = () => {
    return (
        <>
            <TopBarWhite />
            <MembershipCont />
            <Review />
            <Footer />
        </>
    );
}

export default Membership;