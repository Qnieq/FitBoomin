import { Link } from "react-router-dom";
import styles from "./News.module.css"

const News = ({ item }) => {
    
    return (
        <div className={styles.article_list}>
            <img src={item.image} alt="" className={styles.newsImg} />
            <div className={styles.card_list}>
                <div className={styles.details}>
                    <div className={styles.badge}>
                        <div className={styles.chips}>
                            <h5 className={styles.chip}>{item.type}</h5>
                        </div>
                        <h4>{item.date}</h4>
                    </div>
                    <h1 className={styles.title_name}>{item.title}</h1>
                    <p className={styles.description}>{item.about}</p>
                </div>
                <Link to={`/home/blog/${item.id}`} className={styles.more}>Read More <img src="\public\images\arrow-right.png" alt="" /></Link>
            </div>
        </div>
    );
}

export default News;