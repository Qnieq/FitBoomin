import { NavLink, Link } from "react-router-dom";
import styles from "./TopBarWhite.module.css"
import LogoBlue from "../Logo/LogoBlue";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { useContext, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { AuthContext } from "../../Provider/authProvider";

const TopBarWhite = () => {

    const [actions, setActions] = useState({
        openMenu: false
    });
    const [inProp, setInProp] = useState(false);

    const handleClickOpenMenu = () => {
        setActions({ ...actions, openMenu: !actions.openMenu });
        setInProp(!inProp)
    };

    const {user, setUser} = useContext(AuthContext)

    const { logoutUser } = useActions()

    return (
        <div className={styles.cssContainer}>
            <div className={styles.fullBar}>
                <div className={styles.container}>
                    <LogoBlue />
                    <div className={styles.menu}>
                        <ul className={styles.menu_list}>
                            <li className={styles.menu_item}>
                                <NavLink  to="/FitBoomin/" style={({ isActive }) => ({
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
                    <div className={styles.navBarMob}>
                            <IconButton 
                            color=""
                            onClick={handleClickOpenMenu} 
                            className={styles.menuIconButton}>
                                    {actions.openMenu ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
                            </IconButton>
                            {actions.openMenu ?
                                <div className={styles.menu_mob}>
                                    <ul className={styles.menu_list_mob}>
                                        <li className={styles.menu_item_mob}>
                                            <NavLink  to="/FitBoomin/" style={({ isActive }) => ({
                                                color: isActive ? '#1C1C1E' : '#8E8E93',
                                                opacity: isActive ? 1 : 0.56,
                                            })}>Home</NavLink>
                                        </li>
                                        <li className={styles.menu_item}>
                                            <NavLink to="/programs" style={({ isActive }) => ({
                                                color: isActive ? '#1C1C1E' : '#8E8E93',
                                                opacity: isActive ? 1 : 0.56,
                                            })}>Programs</NavLink>
                                        </li>
                                        <li className={styles.menu_item}>
                                            <NavLink to="/trainers" style={({ isActive }) => ({
                                                color: isActive ? '#1C1C1E' : '#8E8E93',
                                                opacity: isActive ? 1 : 0.56,
                                            })}>Trainers</NavLink>
                                        </li>
                                        <li className={styles.menu_item}>
                                            <NavLink to="/membership" style={({ isActive }) => ({
                                                color: isActive ? '#1C1C1E' : '#8E8E93',
                                                opacity: isActive ? 1 : 0.56,
                                            })}>Membership</NavLink>
                                        </li>
                                        <li className={styles.menu_item}>
                                            <NavLink to="/contact" style={({ isActive }) => ({
                                                color: isActive ? '#1C1C1E' : '#8E8E93',
                                                opacity: isActive ? 1 : 0.56,
                                            })}>Contact</NavLink>
                                        </li>
                                        {user == true ? 
                                            <button className={styles.logout_menu} onClick={() => {setUser(false), logoutUser()}}>Logout</button>
                                            :
                                            <>
                                                <li className={styles.menu_item}>
                                                    <NavLink to="/sign-in" style={() => ({
                                                        color: '#1C1C1E'
                                                    })}>Sign In</NavLink>
                                                </li>
                                                <li className={styles.menu_item}>
                                                    <NavLink to="/sign-up" style={() => ({
                                                        color: '#064bb4'
                                                    })}>Sign Up</NavLink>
                                                </li>
                                            </>
                                            }
                                    </ul>
                                </div> : <></> }
                        </div>
                        <div className={styles.auth}>
                            {user == true ? 
                                    <div>
                                        <button className={styles.logout} onClick={() => {setUser(false), logoutUser()}}>Logout</button>
                                    </div>
                                    : 
                                    <>
                                        <Link to={'/sign-in'} className={styles.log_in}>Log In</Link>
                                        <Link to={'/sign-up'} className={styles.sign_up}>Sign Up</Link>
                                    </>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBarWhite;
