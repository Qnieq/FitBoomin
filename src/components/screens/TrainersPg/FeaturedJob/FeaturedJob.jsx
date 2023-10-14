import styles from "./FeaturedJob.module.css"

const FeaturedJob = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h6>My Core Work Values</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Sapiente numquam cumque provident doloribus perspiciatis 
                        explicabo voluptas fuga, incidunt sint aliquid.
                    </p>
                </div>
                <div className={styles.job}>
                    <div className={styles.job_list}>
                        <div className={styles.description}>                    
                            <div className={styles.logo}>
                                <img src="images/Black_biceps.png" alt="" />
                                <h6>Commitment</h6>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Sapiente numquam cumque provident doloribus perspiciatis 
                                    explicabo voluptas fuga, incidunt sint aliquid.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.job_list}>
                        <div className={styles.description}>                    
                            <div className={styles.logo}>
                                <img src="images/logo-white.png" alt="" />
                                <h6>Motivation</h6>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Sapiente numquam cumque provident doloribus perspiciatis 
                                    explicabo voluptas fuga, incidunt sint aliquid.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.job_list}>
                        <div className={styles.description}>                    
                            <div className={styles.logo}>
                                <img src="images/star-black.png" alt="" />
                                <h6>Passion</h6>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Sapiente numquam cumque provident doloribus perspiciatis 
                                    explicabo voluptas fuga, incidunt sint aliquid.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedJob;