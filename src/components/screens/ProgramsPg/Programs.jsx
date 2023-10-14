import Footer from "../../ui/Footer/Footer";
import Review from "../../ui/Review/Review";
import TopBarWhite from "../../ui/TopBar/TopBarWhite";
import AvPrograms from "./AvPrograms/AvPrograms";
import Faqs from "./Faqs/Faqs";

const Programs = () => {
    return (
        <>
            <TopBarWhite />
            <AvPrograms />
            {/* <Faqs /> */}
            <Review />
            <Footer />
        </>
    );
}

export default Programs;