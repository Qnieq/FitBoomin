import { withAuth } from "../../HOC/withAuth";
import Footer from "../../ui/Footer/Footer";
import GetStarted from "../../ui/GetStarted/GetStarted";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import CoachingStaff from "./CoachingStaff/CoachingStaff";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import styles from "./trainers.module.css"

const Trainers = () => {
    return (
        <div className={styles.container}>
            <TopBarWhite />
            <CoachingStaff />
            <FeaturedJob />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default withAuth(Trainers);