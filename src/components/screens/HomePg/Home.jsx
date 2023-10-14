import Container from "./Container/Container";
import HeroSection from "./HeroSection/HeroSection";
import Membership from "./Membership/Membership";
import Review from "../../ui/Review/Review";
import GetStarted from "../../ui/GetStarted/GetStarted";
import Footer from "../../ui/Footer/Footer";
import TopBarBlue from "../../ui/TopBar/TopBarBlue";



const Home = () => {
    return (
        <div>
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