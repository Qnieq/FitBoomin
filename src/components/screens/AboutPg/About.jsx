import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarBlue from "../../ui/TopBar/TopBarBlue";
import Adison from "./Adison/Adison";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import styles from "./about.module.css"

const About = () => {
    return (
        <div className={styles.container}>
            <TopBarBlue />
            <Adison />
            <FeaturedJob />
            <Review/>
            <Footer />
        </div>
    );
}

export default About;