import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css"
import LogoBlack from "../../LogoBlack/LogoBlack";
import { useState } from "react";
import validator from "validator";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const changeHandler = event => {
        if (!validator.isEmail(event.target.value)) {
            setError('Email is invalid');
          } else {
            setError(null);
          }
          setEmail(event.target.value);

    }

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
                        <div className={styles.title}>
                            <h3>Reset Password</h3>
                            <p>Recover your account password</p>
                        </div>
                        <div className={styles.field}>
                            <label>
                                Email
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className={styles.email} 
                                    onChange={changeHandler}
                                    value={email}
                                />
                                {error == null ? <></> : <h4 className={styles.validation}>{error}</h4>}
                            </label>
                        </div>
                        <Link to={'/sign-in/verification'}><button disabled={error == null && email.length >= 3 ? false : true}>Next</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
