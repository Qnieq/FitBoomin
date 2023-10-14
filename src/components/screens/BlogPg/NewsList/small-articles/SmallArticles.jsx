import { Link } from "react-router-dom"
import styles from "./SmallArticles.module.css"

const SmallArticles = ({ item }) => {
    return (
        <Link to={`/home/blog/${item.id}`}>
            <div className={styles.article}>
                <img src={item.image} alt="" />
                <div className={styles.details}>
                    <h4>{item.date}</h4>
                    <h5 className={styles.title_name}>{item.title}</h5>
                </div>
            </div>
        </Link>
    );
}

export default SmallArticles;