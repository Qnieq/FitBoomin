import { useState } from "react";
import styles from "./Review.module.css"
import Comment from "./ccomment/Comment";


const Review = () => {

    const [index, setIndex] = useState(0)

    const comments = [
        {
            id: 0, 
            name: 'Davis Rosser',
            text: 'Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus.', 
            img: 'images/user.png'
        },
        {
            id: 1, 
            name: 'Will Burnett',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio sit quas accusantium quam itaque, officiis magni facilis exercitationem eligendi?', 
            img: 'images/male.jpg'
        },
        {
            id: 2, 
            name: 'Jean Graves',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat dolore nobis fugit libero soluta animi fugiat saepe nulla, ab commodi iste voluptas inventore similique amet illo, temporibus eaque cumque?', 
            img: 'images/famale.jpg'
        },
    ]

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(comments.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=comments.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    return (
        <div className={styles.review}>
            <div className={styles.comments}>
                <div className={styles.title}>
                    <div className={styles.chips}>
                        <h6>Review</h6>
                    </div>
                    <div className={styles.aplication}>
                        <h2>What Our Happy Clients Say</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.notation}>
                        <img src="images/vuesax-bold-quote-up.png" alt="" />
                    </div>
                    <Comment comment={comments[index]} />
                </div>
                <div className={styles.action}>
                    <button className={styles.left} onClick={() => leftShiftHandler()}><img src="images\arrow-right-slider.png" alt="" /></button>
                    <button className={styles.right} onClick={() => rightShiftHandler()}><img src="images\arrow-right-slider.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export default Review;