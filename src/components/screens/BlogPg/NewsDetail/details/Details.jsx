import { useParams } from "react-router-dom";
import styles from "./Details.module.css"
import { useSelector } from "react-redux";
import { useActions } from "../../../../../hooks/useActions";
import { useEffect } from "react";

const Details = () => {
    const { id } = useParams()

    const { isLoading, error, newsId } = useSelector((state) => state.newsId);

    const { getNewsById } = useActions();
    console.log(newsId)

    useEffect(() => {
        getNewsById(id)
    }, [getNewsById])
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <div className={styles.chips}>
                        <h4>Resource Center</h4>
                    </div>
                    <h5>{newsId.title}</h5>
                </div>
                <div className={styles.social_media}>
                    <div className={styles.s_m_list}>
                        <img src="/public/images/facebook-black.png" alt="" />
                    </div>
                    <div className={styles.s_m_list}>
                        <img src="/public/images/in-black.png" alt="" />
                    </div>
                    <div className={styles.s_m_list}>
                        <img src="/public/images/tweater-black.png" alt="" />
                    </div>
                    <div className={styles.s_m_list}>
                        <img src="/public/images/link-black.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.info}>
                    <img src={newsId.image} alt="" />
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos necessitatibus exercitationem
                            provident velit est non ipsam temporibus eos, nostrum id, deserunt possimus
                            rem minima, reprehenderit
                            ea explicabo. Libero facilis quis culpa exercitationem. Excepturi perferendis
                            perspiciatis culpa tempora inventore,
                            placeat adipisci neque natus quia nemo accusamus recusandae obcaecati ipsa temporibus atque.
                        </p>
                        <div className={styles.coach}>
                            <h1>{newsId.coach} <span>Training Coach</span></h1>
                        </div>
                        <p>
                            A porta sed nunc amet dolor pharetra. Posuere interdum semper duis semper id. Sem sit sed sapien hendrerit phasellus non. Venenatis lectus lectus vulputate in lacus arcu. Pharetra lacus diam faucibus sapien ac egestas purus vehicula odio. Volutpat justo purus eu tortor.
                            <br /><br />
                            Porta purus vel volutpat id facilisis sem. Rhoncus vitae potenti tellus maecenas pellentesque viverra suspendisse. Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.
                            <br /><br />
                            Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et. Suspendisse feugiat scelerisque et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra.
                            <br /> 1. Enim eu turpis egestas pretium aenean pharetra magna ac placerat.
                            <br /> 2. Nunc semper velit netus donec commodo.
                            <br /> 3. Lacus hendrerit aliquam habitant eget faucibus venenatis turpis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;