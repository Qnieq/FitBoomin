import styles from "./GetStarted.module.css"

const GetStarted = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>Discover Your Potential</h1>
                    </div> 
                    <div className={styles.description}>
                        <p>
                            Workout was started by James and Mount in 2012. It’s our mission to 
                            help people in Denver get fit, stay healthy, and live life on 
                            their terms without fitness being an obstacle.
                        </p>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;