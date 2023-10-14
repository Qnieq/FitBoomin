import styles from "./LogoBlack.module.css"

const LogoBlack = () => {
    return (
        <div className={styles.title}>
            <img src="images/logo-black.png" alt="fitboomin" className={styles.logo}/>
            <h2 className={styles.nickname}>FitBoo<span className={styles.nickname_min}>min</span></h2>
        </div>
    );
}

export default LogoBlack;