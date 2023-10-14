import { useEffect, useState } from "react"
import styles from "./Review.module.css"
 
const Review = () => {
    
    const myObjects = [
        { id: 1, name: '1'},
        { id: 2, name: '2'},
        { id: 3, name: '3'},
    ]


    const [appState, changeState] = useState({
        activeObject: myObjects[1],
        objects: myObjects,
    })

    const [count, setCount] = useState(1)
    useEffect(() => {
        if (count == 0){
            setCount(1)
        } else if (count >= 4){
            setCount(3)
        }
    }, [count])


    

    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.objects[index] })
    }

    function toggleActiveStyles(index) {
        if (appState.objects[index] === appState.activeObject) {
            return "details active"
        } else {
            return "details inactive"
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
                        <img src="/public/images/vuesax-bold-quote-up.png" alt="" />
                    </div>
                    <div className={toggleActiveStyles(1)}>
                        <div className={styles.description}>
                            <div className={styles.member}>
                                <h6>Member Review</h6>
                            </div>
                            <div className={styles.text}>
                                <p>Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. </p>
                            </div>
                        </div>
                        <div className={styles.user_info}>
                            <div className={styles.user}>
                                <img src="/public/images/user.png" alt="" />
                            </div>
                            <div className={styles.user_name}>
                                <h6>Davis Rosser</h6>
                                <div className={styles.user_class}>
                                    <h6>Member</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleActiveStyles(2)}>
                        <div className={styles.description}>
                            <div className={styles.member}>
                                <h6>Member Review</h6>
                            </div>
                            <div className={styles.text}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio sit quas accusantium quam itaque, officiis magni facilis exercitationem eligendi? </p>
                            </div>
                        </div>
                        <div className={styles.user_info}>
                            <div className={styles.user}>
                                <img src="/public/images/male.jpg" alt="" />
                            </div>
                            <div className={styles.user_name}>
                                <h6>Will Burnett</h6>
                                <div className={styles.user_class}>
                                    <h6>Member</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleActiveStyles(3)}>
                        <div className={styles.description}>
                            <div className={styles.member}>
                                <h6>Member Review</h6>
                            </div>
                            <div className={styles.text}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat dolore nobis fugit libero soluta animi fugiat saepe nulla, ab commodi iste voluptas inventore similique amet illo, temporibus eaque cumque? </p>
                            </div>
                        </div>
                        <div className={styles.user_info}>
                            <div className={styles.user}>
                                <img src="/public/images/famale.jpg" alt="" />
                            </div>
                            <div className={styles.user_name}>
                                <h6>Jean Graves</h6>
                                <div className={styles.user_class}>
                                    <h6>Member</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.action}>
                    <div className={styles.left}>
                        <img src="/public/images/arrow-left-slider.png" alt="" onClick={() => {setCount(count-1), toggleActive(count)}}/>
                    </div>
                    <div className={styles.slider}>
                        <div></div>
                        <img src="/public/images/slider-ecllips.png" alt="" />
                        <img src="/public/images/slider-ecllips.png" alt="" />
                    </div>
                    <div className={styles.right}>
                        <img src="/public/images/arrow-right-slider.png" alt="" onClick={() => {setCount(count+1), toggleActive(count)}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;