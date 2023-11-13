import { Link } from "react-router-dom";
import LogoBlack from "../LogoBlack/LogoBlack";
import styles from "./SignUpContainer.module.css"
import { useState } from "react";

const SignUpContainer = () => {
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
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
                                Email
                                <input type="text" placeholder="Enter your email" className={styles.email} />
                                <Link to={'/sign-up/confirm'}><button disabled={!agree}>Continue</button></Link>
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
        </>
    );
}

export default SignUpContainer;
