import styles from "./Detail.module.css"
import FormContact from "./FormContact/FormContact";

const Detail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.detail}>
                <div className={styles.title}>
                    <h6><span>Let's get</span> in touch!</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. 
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className={styles.contact_container}>
                    <div className={styles.callback}>
                        <FormContact />
                    </div>
                    <div className={styles.contact_info}>
                        <div className={styles.contact_title}>
                            <h5>Contact Details</h5>
                            <p>
                                Fill up the form and our team will get 
                                back to you with in 24 hours.
                            </p>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.contact_list}>
                                <div className={styles.notification}>
                                    <img src="images/phone.png" alt="phone" />
                                </div>
                                <h4>+1 234 5678 910</h4>
                            </div>
                            <div className={styles.contact_list}>
                                <div className={styles.notification}>
                                    <img src="images/sms.png" alt="sms" />
                                </div>
                                <h4>hello@nguli.com</h4>
                            </div>
                            <div className={styles.contact_list}>
                                <div className={styles.notification}>
                                    <img src="images/point.png" alt="point" />
                                </div>
                                <h4>105 Street, Seatle-US</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;