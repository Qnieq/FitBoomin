import { Link } from 'react-router-dom';
import styles from './MainItem.module.css'

const MainItem = ({ item }) => {
    return (
        <div className={styles.article}>
            <img src={item.image} alt="" className={styles.featuredImg} />
            <div className={styles.card_list}>
                <div className={styles.details}>
                    <div className={styles.badge}>
                        <div className={styles.chips}>
                            <h5 className={styles.chip}>Featured</h5>
                        </div>
                        <h4>{item.date}</h4>
                    </div>
                    <h5 className={styles.title_name}>{item.title}</h5>
                    <p className={styles.description}>{item.about}</p>
                </div>
                <Link to={`/home/blog/2`} className={styles.more}>Read More <img src="\public\images\arrow-right.png" alt="" /></Link>
            </div>
        </div>
    );
}

export default MainItem;