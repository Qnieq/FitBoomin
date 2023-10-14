import { NavLink, Link } from "react-router-dom";
import LogoWhite from "../Logo/LogoWhite";
import styles from "./TopBarBlue.module.css"

const TopBarBlue = () => {

    return (
        <div className={styles.fullBar}>
            <div className={styles.container}>
                <LogoWhite />
                <div className={styles.menu}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_item}>
                            <NavLink  to="/FitBoomin/" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#fff',
                                opacity: isActive ? 1 : 0.56,
                            })}>Home</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/programs" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#fff',
                                opacity: isActive ? 1 : 0.56,
                            })}>Programs</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/trainers" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#fff',
                                opacity: isActive ? 1 : 0.56,
                            })}>Trainers</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/membership" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#fff',
                                opacity: isActive ? 1 : 0.56,
                            })}>Membership</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/contact" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#fff',
                                opacity: isActive ? 1 : 0.56,
                            })}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.buy_menu}>
                    {/* <Link to="/membership/cart"><img src="/public/images/buy.png" alt="buycart" className={styles.buy}/><span className={styles.count}>{cart.length}</span></Link> */}
                    <Link to={'/sign-in'} className={styles.log_in}>Log In</Link>
                    <Link to={'/sign-up'} className={styles.sign_up}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default TopBarBlue;
