import Container from "./Container/Container";
import HeroSection from "./HeroSection/HeroSection";
import Membership from "./Membership/Membership";
import Review from "../../ui/Review/Review";
import GetStarted from "../../ui/GetStarted/GetStarted";
import Footer from "../../ui/Footer/Footer";
import TopBarBlue from "../../ui/TopBar/TopBarBlue";
import styles from "./Home.module.css"



const Home = () => {
    return (
        <div className={styles.container}>
            <TopBarBlue />
            <HeroSection />
            <Container />
            <Membership />
            <Review />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default Home;