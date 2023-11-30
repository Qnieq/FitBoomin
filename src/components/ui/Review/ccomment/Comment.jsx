import styles from "../Review.module.css"

const Comment = ({ comment }) => {
    return (
        <>
            <div className={styles.deatils}>
                <div className={styles.description}>
                    <div className={styles.member}>
                        <h6>Member Rewiew</h6>
                    </div>
                    <div className={styles.text}>
                        <p>{comment.text} </p>
                    </div>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.user}>
                        <img src={comment.img} alt="" />
                    </div>
                    <div className={styles.user_name}>
                        <h6>{comment.name}</h6>
                        <div className={styles.user_class}>
                            <h6>Member</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;