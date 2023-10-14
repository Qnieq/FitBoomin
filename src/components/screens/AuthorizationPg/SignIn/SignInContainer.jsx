import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from "react-router-dom";
import LogoBlack from "../LogoBlack/LogoBlack";
import styles from "./SignInContainer.module.css"
import PopUp from "../PopUp";
import { useState } from "react";

const SignInContainer = () => {
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <PopUp />
            <div className={styles.container}>
                <div className={styles.popUp}>
                    <Link to={'/home'} className={styles.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" fill="#1C1C1E" />
                        </svg>
                    </Link>
                    <LogoBlack />
                    <div className={styles.content}>
                        <h3>Hey there, welome back!</h3>
                        <form>
                            <label>
                                Email
                                <input type="text" placeholder="Enter your email" className={styles.email} />
                            </label>
                            <label>
                                Password
                                <input
                                    type={values.showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange("password")}
                                    className={styles.password}
                                    value={values.password}
                                    placeholder='Enter your password'
                                />                                        
                                <InputAdornment className={styles.passwordIcon}>
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                </InputAdornment>
                            </label>
                            <Link to={'/home'}><button>Login</button></Link>
                        </form>
                        <div className={styles.already}>
                            <Link to={'/sign-in/forgot-password'}>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInContainer;