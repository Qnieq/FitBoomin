import { withAuth } from "../../HOC/withAuth";
import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import AvPrograms from "./AvPrograms/AvPrograms";
import styles from "./programs.module.css"

const Programs = () => {
    return (
        <div className={styles.container}>
            <TopBarWhite />
            <AvPrograms />
            <Review />
            <Footer />
        </div>
    );
}

export default withAuth(Programs);