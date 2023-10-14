
import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarBlue from "../../ui/TopBar/TopBarBlue";
import Adison from "./Adison/Adison";
import FeaturedJob from "./FeaturedJob/FeaturedJob";

const About = () => {
    return (
        <>
            <TopBarBlue />
            <Adison />
            <FeaturedJob />
            <Review/>
            <Footer />
        </>
    );
}

export default About;