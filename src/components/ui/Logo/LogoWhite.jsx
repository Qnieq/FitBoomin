import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

const LogoWhite = () => {
    return (
        <Link to={'/home'}>
            <div className={styles.title}>
                <img src="images/logo-white.png" alt="fitboomin" className={styles.logo}/>
                <h2 className={styles.nickname}>FitBoo<span className={styles.nickname_min}>min</span></h2>
            </div>
        </Link>
    );
}

export default LogoWhite;