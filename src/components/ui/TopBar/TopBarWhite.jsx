import { NavLink, Link } from "react-router-dom";
import styles from "./TopBarWhite.module.css"
import LogoBlue from "../Logo/LogoBlue";

const TopBarWhite = () => {
    // const {cart} = useCart()
    return (
        <div className={styles.fullBar}>
            <div className={styles.container}>
                <LogoBlue />
                <div className={styles.menu}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_item}>
                            <NavLink  to="/home" style={({ isActive }) => ({
                                color: isActive ? '#1C1C1E' : '#8E8E93',
                            })}>Home</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/programs" style={({ isActive }) => ({
                                color: isActive ? '#1C1C1E' : '#8E8E93',
                            })}>Programs</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/trainers" style={({ isActive }) => ({
                                color: isActive ? '#1C1C1E' : '#8E8E93',
                            })}>Trainers</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/membership" style={({ isActive }) => ({
                                color: isActive ? '#1C1C1E' : '#8E8E93',
                            })}>Membership</NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to="/contact" style={({ isActive }) => ({
                                color: isActive ? '#1C1C1E' : '#8E8E93',
                            })}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.buy_menu}>
                    {/* <Link to="/membership/cart"><img src="/public/images/buy-card-black.png" alt="buycart" className={styles.buy}/><span className={styles.count}>{cart.length}</span></Link> */}
                    <Link to={'/sign-in'} className={styles.log_in}>Log In</Link>
                    <Link to={'/sign-up'} className={styles.sign_up}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default TopBarWhite;