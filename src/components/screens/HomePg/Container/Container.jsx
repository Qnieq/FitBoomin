import { Link } from "react-router-dom";
import styles from "./Container.module.css"

const Container = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleText}>
                <h3>We offer something for everybody</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.card_list}>
                    <div className={styles.logo_title}>
                        <img src="/public/images/Black_biceps.png" alt="biceps" />
                        <h4>Crush any strength program with our suite of strength equipment</h4>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Fully fitted powerlifting and strongman section</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Olympic lifting platforms, weights, and bars</h5>
                        </div>                        
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Dumbells ranging 5lbs-250lbs</h5>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.button_container}>
                        <Link to={'/membership'} className={styles.button}>Join Now</Link>
                    </div>  
                </div>
                <div className={styles.card_image}>
                    <img src="/images/man1.png" alt="" />
                </div>
            </div>
            <div className={styles.content_second}>
                <div className={styles.card_list}>
                    <div className={styles.logo_title}>
                        <img src="/public/images/black-health.png" alt="heart" />
                        <h4>Be guided every step of the way with one of our world class coaches</h4>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Weightloss</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Competitive CrossFit</h5>
                        </div>                        
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>Powerlifting</h5>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.button_container}>
                        <Link to={'/membership'} className={styles.button}>Join Now</Link>
                    </div>  
                </div>
                <div className={styles.card_image}>
                    <img src="/images/man2.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Container;