import styles from "./HeroSection.module.css"
import ProgItems from "../../../ui/ProgItems/ProgItems";

const HeroSection = () => {
    return (
        <div className={styles.HeroSection}>
            <div className={styles.motivation}>
                <h1 className={styles.motivation_words}>For Your <span>Health</span><br /> and <span>Fitness Goals</span><br /> in No Time</h1>
                <p>
                    It doesn’t matter if your goal is to get stronger, burn fat, or to <br /> 
                    just stay fit our world class coaches will guide you every step of <br />
                    the way.
                </p>
                <button>Book a Class</button>
                <div className={styles.sponsers}>
                    <h5>Supported by:</h5>
                    <div className={styles.brends}>
                        <img src="/public/images/nike.png" alt="" />
                        <img src="/public/images/esprit.png" alt="" />
                        <img src="/public/images/apple-watch.png" alt="" />
                        <img src="/public/images/new-balance.png" alt="" />
                    </div>
                </div>
                <div className={styles.items}>
                    <ProgItems />
                    <div className={styles.progText}>
                        <h1>Training Program For You</h1>
                        <p>Starting a fitness routine can be intimidating, but it helps to have an idea of whar to expect before joining any class.</p>
                    </div>
                </div>
            </div>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <img src="/public/images/menHome.png" alt="" className={styles.bodybuilder}/>
                </div>
                <div className={styles.heart_rate}>
                    <div className={styles.rate}>
                        <img src="/public/images/health.png" alt="" className={styles.biceps}/>
                        <h6>Heart Rate</h6>
                        <h5>9281 bpm</h5>
                    </div>
                </div>
                <div className={styles.muscle_rate}>
                    <div className={styles.rate}>
                        <img src="/public/images/biceps.png" alt="" className={styles.biceps}/>
                        <h6>Muscle Rate</h6>
                        <h5>2,861</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;