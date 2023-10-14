import { NavLink } from "react-router-dom";
import LogoWhite from "../Logo/LogoWhite";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo_desc}>
                    <LogoWhite />
                    <div className={styles.logo_desc_text}>
                        <p>
                            Get fit, stay healthy, and live life on 
                            their terms without fitness being an obstacle.
                        </p>
                    </div>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <NavLink to="/home" className={styles.navLink}>Home</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/programs" className={styles.navLink}>Programs</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/membership" className={styles.navLink}>Membership</NavLink>
                        </li>
                    </ul>
                    <ul className={styles.navList}>
                        {/* <li className={styles.navItem}>
                            <NavLink to="/home/blog" className={styles.navLink}>Blog</NavLink>
                        </li> */}
                        <li className={styles.navItem}>
                            <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/home/about" className={styles.navLink}>About Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.news}>
                    <div className={styles.news_title}>
                        <h5>Newsletter</h5>
                    </div>
                    <form className={styles.NewsletterForm}>
                        <input type="text" placeholder="Your email here" />
                        <button>Send</button>
                    </form>  
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.copyright}>
                <div className={styles.inc}>
                    <h6>© 2022 Nguli® Global Inc.</h6>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#"><img src="images/facebook.png" alt="" /></a>
                    <a href="#"><img src="images/in.png" alt="" /></a>
                    <a href="#"><img src="images/tweeter.png" alt="" /></a>
                    <a href="#"><img src="images/youtube.png" alt="" /></a>
                    <a href="#"><img src="images/instagram.png" alt="" /></a>
                </div>
                <div className={styles.privacy}>
                    <ul className={styles.privacyCart}>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;