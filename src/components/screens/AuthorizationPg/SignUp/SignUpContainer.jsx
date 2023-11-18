import { Link, Navigate } from "react-router-dom";
import LogoBlack from "../LogoBlack/LogoBlack";
import styles from "./SignUpContainer.module.css"
import { useEffect, useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import validator from "validator";
import { useRegister } from "../../../../hooks/useRegister";

const SignUpContainer = () => {

    const { removeAll, removeAuth, logoutUser } = useActions();

    const [agree, setAgree] = useState(false);

    const [values, setValues] = useState('');
    const [exist, setExist] = useState(false);

    const { addEmail } = useActions();
    const { getAuthUsers } = useActions();
    const { removeIsExist } = useActions();

    const { register } = useRegister()

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const checkboxHandler = () => {
        setAgree(!agree);
    }
    const changeHandler = event => {
        const emails = event.target.value
        if (!validator.isEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setEmail(event.target.value);

        setValues(emails)
    }

    useEffect(() => {
        if (register.isExist == "not exist") {
            addEmail(email)
            setExist(false)
        } else if (register.isExist == "exist") {
            setExist(true)
        } else {
            removeIsExist()
        }
    }, [register.isExist])

    if (register.isExist == "not exist") {
        return <Navigate to="/sign-up/confirm" />
    }

    const replaceData = () => {
        removeAuth()
        removeAll()
        logoutUser()
    }

    return (
        <div className={styles.container}>
            <div className={styles.popUp}>
                <Link to={'/FitBoomin/'} className={styles.close} onClick={() => replaceData()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" fill="#1C1C1E" />
                    </svg>
                </Link>
                <LogoBlack />
                <div className={styles.content}>
                    <h3>Welcome to Work<span>out</span></h3>
                    <div className={styles.variants}>
                        <div className={styles.cta}>
                            <button><img src="images/google.png" alt="" />Continue with Google</button>
                            <button><img src="images/icon-apple.png" alt="" />Continue with Apple</button>
                        </div>
                        <div className={styles.login}>
                            <span></span>
                            <h6>Or Sign Up with</h6>
                            <span></span>
                        </div>
                    </div>
                    <form>
                        <label>
                            {exist == true ?
                                <h4>Email already registered</h4>
                                :
                                <></>
                            }
                            Email
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.email}
                                onChange={changeHandler}
                                value={email}
                            />
                            {error == null ? <></> : <h4 className={styles.validation}>{error}</h4>}
                            <button
                                onClick={() => getAuthUsers(email)}
                                disabled={error == null && values.length >= 3 ? !agree : true}>
                                Continue
                            </button>
                        </label>
                        <div className={styles.agree}>
                            <input type="checkbox" onChange={checkboxHandler} />
                            <p>I agree to Claraa <Link>Terms of Use</Link> <span>and</span> <Link>Privacy Policy</Link></p>
                        </div>
                    </form>
                    <div className={styles.already}>
                        <p>Already have an account? <Link to={'/sign-in'}>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpContainer;
