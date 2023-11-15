import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from "react-router-dom";

import styles from "./Password.module.css"

import { useState } from "react";
import LogoBlack from '../../LogoBlack/LogoBlack';
import { Box, OutlinedInput } from '@mui/material';
import { useActions } from '../../../../../hooks/useActions';

const Password = () => {

    const { addPassword } = useActions()

    const [values1, setValues1] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword1 = () => {
        setValues1({ ...values1, showPassword: !values1.showPassword });
    };

    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange1 = (prop) => (event) => {
        setValues1({ ...values1, [prop]: event.target.value });
    };
    const [values2, setValues2] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword2 = () => {
        setValues2({ ...values2, showPassword: !values2.showPassword });
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange2 = (prop) => (event) => {
        setValues2({ ...values2, [prop]: event.target.value });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.popUp}>
                    <Link to={'/FitBoomin/'} className={styles.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" fill="#1C1C1E" />
                        </svg>
                    </Link>
                    <LogoBlack />
                    <div className={styles.content}>
                        <h3>Create New Password</h3>
                        <form>
                            <label>
                                Password
                                <Box sx={{
                                    width: "100%",
                                }}>
                                    <OutlinedInput 
                                        type={values1.showPassword ? "text" : "password"}
                                        onChange={handlePasswordChange1("password")}
                                        className={styles.pass}
                                        value={values1.password}
                                        placeholder='Enter your password'

                                        endAdornment={
                                            <InputAdornment className={styles.password}>
                                                <IconButton
                                                    onClick={handleClickShowPassword1}
                                                    onMouseDown={handleMouseDownPassword1}
                                                >
                                                    {values1.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        }>
                                    </OutlinedInput>
                                </Box>
                            </label>
                            <label>
                                Repeat your Password
                                <Box sx={{
                                    width: "100%",
                                }}>
                                    <OutlinedInput 
                                        type={values2.showPassword ? "text" : "password"}
                                        onChange={handlePasswordChange2("password")}
                                        className={styles.pass}
                                        value={values2.password}
                                        placeholder='Enter your password'

                                        endAdornment={
                                            <InputAdornment className={styles.password}>
                                                <IconButton
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                >
                                                    {values2.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        }>
                                    </OutlinedInput>
                                </Box>
                            </label>
                            <Link to={'/successfully'} onClick={() => addPassword(values2.password)}><button>Next</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Password;
