import styles from "./FormContact.module.css"

const FormContact = () => {
    return (
        <form className={styles.contact_form}>
            <div className={styles.form_cont}>
                <label>
                    Full Name
                    <input type="text" placeholder="What's your Name?" />
                </label>
                <label>
                    Email
                    <input type="text" placeholder="What's your Email?" />
                </label>
                <label>
                    Phone
                    <input type="text" placeholder="What's your Phone?" />
                </label>
                <label>
                    Input Title
                    <textarea placeholder="Write your message..."></textarea>
                </label>
            </div>
            <div className={styles.btn}>
                <button>Send Message</button>
            </div>
        </form>
    );
}

export default FormContact;