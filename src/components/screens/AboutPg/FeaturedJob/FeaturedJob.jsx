import styles from "./FeaturedJob.module.css"

const FeaturedJob = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h5>My Core Work Values</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        elit. Alias praesentium hic mollitia cumque.
                    </p>
                </div>
                <div className={styles.content_list}>
                    <div className={styles.value}>
                        <div className={styles.card_list}>
                            <div className={styles.logo}>
                                <img src="/public/images/Black_biceps.png" alt="" />
                                <h5>Commitment</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Dolore totam ad asperiores reprehenderit, 
                                adipisci ullam magnam vel aut nihil debitis?
                            </p>
                        </div>
                        <img src="/public/images/about-first.png" alt="" className={styles.mainImg}/>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.card_list}>
                            <div className={styles.logo}>
                                <img src="/public/images/black-health.png" alt="" />
                                <h5>Motivation</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Dolore totam ad asperiores reprehenderit, 
                                adipisci ullam magnam vel aut nihil debitis?
                            </p>
                        </div>
                        <img src="/public/images/about-second.png" alt="" className={styles.mainImg}/>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.card_list}>
                            <div className={styles.logo}>
                                <img src="/public/images/star-black.png" alt="" />
                                <h5>Passion</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Dolore totam ad asperiores reprehenderit, 
                                adipisci ullam magnam vel aut nihil debitis?
                            </p>
                        </div>
                        <img src="/public/images/about-third.png" alt="" className={styles.mainImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedJob;