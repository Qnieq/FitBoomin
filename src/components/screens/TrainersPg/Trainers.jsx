import Footer from "../../ui/Footer/Footer";
import GetStarted from "../../ui/GetStarted/GetStarted";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import CoachingStaff from "./CoachingStaff/CoachingStaff";
import FeaturedJob from "./FeaturedJob/FeaturedJob";

const Trainers = () => {
    return (
        <>
            <TopBarWhite />
            <CoachingStaff />
            <FeaturedJob />
            <GetStarted />
            <Footer />
        </>
    );
}

export default Trainers;