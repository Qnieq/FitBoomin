import { withAuth } from "../../HOC/withAuth";
import Footer from "../../ui/Footer/Footer";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import Detail from "./Detail/Detail";
import styles from "./contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container}>
            <TopBarWhite />
            <Detail />
            <Footer />
        </div>
    );
}

export default withAuth(Contact);