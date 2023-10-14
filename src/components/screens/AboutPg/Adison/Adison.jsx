import styles from "./Adison.module.css"

const Adison = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about_me}>
                <div className={styles.about_me_title}>
                    <h5>About Me</h5>
                </div>
                <div className={styles.about_me_text}>
                    <div className={styles.about_adison}>
                        <h6>
                            Hi, I'm <span>Adison</span>, your <span>personal trainner</span>
                        </h6>
                    </div>
                    <div className={styles.story}>
                        <h2>What's my story?</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolore non doloremque suscipit nihil officiis iste eaque
                            obcaecati provident perferendis!
                            Illo, minima nostrum veniam ut modi quod tenetur recusandae optio iure.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.about_me_img}>
                <img src="/public/images/adison.png" alt="" />
                <div className={styles.experience}>
                    <img src="/images/video-square.png" alt="" />
                    <div className={styles.title}>
                        <h3>120+</h3>
                        <p>Years of experience</p>
                    </div>
                </div>
                <div className={styles.experience}>
                    <img src="/images/video-square.png" alt="" />
                    <div className={styles.title}>
                        <h3>1.400+</h3>
                        <p>Classes taught</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adison;