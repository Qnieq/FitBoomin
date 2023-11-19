import LogoBlue from "../../ui/Logo/LogoBlue";
import styles from "./NotAuth.module.css"
import Loader from "../../ui/Loader/Loader";
import ButtonAuth from "../../ui/ButtonAuth/ButtonAuth";

const NotAuth = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.logo}>
                <LogoBlue />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>You are not authorized to view this page :(</h2>
                    </div>
                    <Loader />
                    <div className={styles.auth}>
                        <h2>Authorize right now</h2>
                        <ButtonAuth />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotAuth;