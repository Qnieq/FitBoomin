import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Programs from "../screens/ProgramsPg/Programs";
import Trainers from "../screens/TrainersPg/Trainers";
import Membership from "../screens/MembershipPg/Membership";
import Contact from "../screens/ContactPg/Contact";
import About from "../screens/AboutPg/About";
// import Blog from "../screens/BlogPg/Blog";
// import NewsDetail from "../screens/BlogPg/NewsDetail/NewsDetail";
import MembershipDetail from "../screens/MembershipPg/membership-detail/MembershipDetail";
import Payment from "../screens/PaymentPg/Payment";
import SignIn from "../screens/AuthorizationPg/SignIn";
import SignUp from "../screens/AuthorizationPg/SignUp";
import ConfirmSignUp from "../screens/AuthorizationPg/SignUp/ConfirmSignUp/ConfirmSignUp";
import SecurityCode from "../screens/AuthorizationPg/SignUp/SecurityCode/SecurityCode";
import Password from "../screens/AuthorizationPg/SignUp/Password/Password";
import Success from "../screens/AuthorizationPg/SignUp/Success/Success";
import ForgotPassword from "../screens/AuthorizationPg/SignIn/Forgot/ForgotPassword";
import VerifCode from "../screens/AuthorizationPg/SignIn/VerifCode/VerifCode";
import NewPassword from "../screens/AuthorizationPg/SignIn/Password/NewPassword";
import Successfully from "../screens/AuthorizationPg/SignIn/Successfully/Successfully";
// import Cart from "../screens/CartPg/Cart";


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/FitBoomin" element={<Home />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/home/about" element={<About />} />
                {/* <Route path="/home/blog" element={<Blog />} /> */}
                {/* <Route path="/home/blog/:id" element={<NewsDetail />} /> */}
                <Route path="/membership/:id" element={<MembershipDetail />} />
                <Route path="/membership/payment/:id" element={<Payment />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-up/confirm" element={<ConfirmSignUp />} />
                <Route path="/sign-up/confirm/code" element={<SecurityCode />} />
                <Route path="/sign-up/password" element={<Password />} />
                <Route path="/success" element={<Success />} />
                <Route path="/sign-in/forgot-password" element={<ForgotPassword />} />
                <Route path="/sign-in/verification" element={<VerifCode />} />
                <Route path="/sign-ip/new-password" element={<NewPassword />} />
                <Route path="/successfully" element={<Successfully />} />
                {/* <Route path="/membership/cart" element={<Cart />} /> */}

                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
