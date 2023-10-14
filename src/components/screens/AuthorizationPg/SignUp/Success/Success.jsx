import { Link } from "react-router-dom";
import PopUp from "../../PopUp";
import styles from "./Success.module.css";

const Success = () => {
    return (
        <>
            <PopUp />
            <div className={styles.container}>
                <div className={styles.popUp}>
                    <div className={styles.title}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
                            <circle opacity="0.12" cx="80.5" cy="79.5" r="62.5" fill="#00C566" />
                            <path d="M80.5714 150.857C41.1694 150.857 9.14282 118.831 9.14282 79.4286C9.14282 40.0266 41.1694 8 80.5714 8C119.973 8 152 40.0266 152 79.4286C152 118.831 119.973 150.857 80.5714 150.857ZM80.5714 17.9668C46.6844 17.9668 19.1096 45.5415 19.1096 79.4286C19.1096 113.316 46.6844 140.89 80.5714 140.89C114.458 140.89 142.033 113.316 142.033 79.4286C142.033 45.5415 114.458 17.9668 80.5714 17.9668Z" fill="#00C566" />
                            <path d="M70.5333 103.867C69.2 103.867 67.9334 103.333 67 102.4L48.1333 83.5333C46.2 81.5999 46.2 78.3999 48.1333 76.4666C50.0667 74.5333 53.2667 74.5333 55.2 76.4666L70.5333 91.7999L104.8 57.5333C106.733 55.5999 109.933 55.5999 111.867 57.5333C113.8 59.4666 113.8 62.6666 111.867 64.5999L74.0667 102.4C73.1334 103.333 71.8667 103.867 70.5333 103.867Z" fill="#00C566" />
                        </svg>
                        <div className={styles.description}>
                            <h3>Succcess!</h3>
                            <p>You are successfully signed</p>
                        </div>
                    </div>
                    <Link to={'/home'}><button>Continue</button></Link>
                </div>
            </div>
        </>
    );
}

export default Success;