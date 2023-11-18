import { Link } from "react-router-dom";
import styles from "./VerifCode.module.css"
import LogoBlack from "../../LogoBlack/LogoBlack";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import { useActions } from "../../../../../hooks/useActions";

const VerifCode = () => {
    const [agree, setAgree] = useState(false);

    const handler = nativeEvent => {
        const result = nativeEvent.target.value;

        result.length >= 6 ? setAgree(true) : setAgree(false);
    }

    const { removeCorrect, removeAll, removeAuth, logoutUser } = useActions();

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
                            <h3>Enter your verification code</h3>
                            <p>We texted your code to email</p>
                        </div>
                        <VerificationInput 
                            validChars="0-9" 
                            length={6}
                            containerProps={{
                                onChange: (e) => {
                                    handler(e);
                                }
                            }}
                            classNames={{
                                container: styles.validation,
                                character: styles.character,
                                characterInactive: styles.characterInactive,
                                characterSelected: styles.characterSelected,
                            }}
                        />
                        <Link to={'/sign-in/new-password'} onClick={() => removeCorrect()}><button disabled={!agree}>Continue</button></Link>
                    </div>
                </div>
            </div>
    );
}

export default VerifCode;
