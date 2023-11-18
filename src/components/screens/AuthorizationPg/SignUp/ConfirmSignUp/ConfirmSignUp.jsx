import styles from "./ConfirmSigmUp.module.css"
import { Link } from "react-router-dom"
import LogoBlack from "../../LogoBlack/LogoBlack";
import { useEffect, useState } from "react";
import { useActions } from "../../../../../hooks/useActions";

const ConfirmSignUp = () => {

    const { removeIsExist } = useActions();

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }
    useEffect(() => {
        removeIsExist()
    }, [])

    const { removeAll, removeAuth, logoutUser } = useActions();

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
                    <div className={styles.title}>
                        <h3>Let’s confirm it’s really you</h3>
                        <p>Help us secure your account. Please complete the verifications below</p>
                    </div>
                    <div className={styles.remember}>
                        <input type="checkbox" onChange={checkboxHandler} />
                        <p>Get the code by email at email</p>
                    </div>
                    <Link to={'/sign-up/confirm/code'}><button disabled={!agree}>Continue</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ConfirmSignUp;
