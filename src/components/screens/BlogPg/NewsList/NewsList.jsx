import styles from "./NewsList.module.css"
import MainItem from "./main-item/MainItem";
import SmallArticles from "./small-articles/SmallArticles";
import News from "./news-list/News";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect, useState } from "react";

const NewsList = () => {

    const [filters, setFilters] = useState('');

    const { isLoading, error, news } = useSelector((state) => state.news);

    const { getNews } = useActions();
    
    useEffect(() => {
        getNews()
    }, [getNews])

    const newsItem = news[0]
    const featured = news[1]
    const articles = news[2]

    
    const myObjects = [
        { id: 1, name: 'All', type: '' },
        { id: 2, name: 'Fitness', type: 'Fitness' },
        { id: 3, name: 'Health', type: 'Health' },
        { id: 4, name: 'Recipes', type: 'Recipes' }
    ]


    const [appState, changeState] = useState({
        activeObject: myObjects[0],
        objects: myObjects,
    })

    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.objects[index] })
    }

    function toggleActiveStyles(index) {
        if (appState.objects[index] === appState.activeObject) {
            return "btn active"
        } else {
            return "btn inactive"
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.news}>
                <div className={styles.title}>
                    <div className={styles.chips}>
                        <h5 className={styles.chip}>Resource Center</h5>
                    </div>
                    <h6><span>Featured</span> News</h6>
                </div>
                <div className={styles.main_news}>
                    {featured.map(item => <MainItem key={item.id} item={item} />)}
                    <div className={styles.small_articles}>
                        {articles.map(item => <SmallArticles key={item.id} item={item} />)}
                    </div>
                </div>
                <div className={styles.news_list}>
                    <div className={styles.header}>
                        <h3>Topic Match For You</h3>
                        <div className={styles.filter}>
                            {appState.objects.map((element, index) => (
                                <button key={index}
                                    className={toggleActiveStyles(index)}
                                    onClick={() => {
                                        toggleActive(index)
                                        setFilters(element.type)
                                    }}
                                    value={element.type}
                                >{element.name}</button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_list}>
                            {newsItem.filter((val) => {
                                return filters == ''
                                    ? val : val.type == filters
                            }).map(item => <News key={item.id} item={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsList;