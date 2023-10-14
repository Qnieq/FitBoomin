/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './DetailsPurchase.module.css'
import { Link } from 'react-router-dom';
import { useActions } from '../../../../../hooks/useActions';

const DetailsPurchase = ({ item } ) => {
    let [value, setValue] = useState('');

    if (value > 12) {
        value = 12;
    }
    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');

        setValue(result);
    };

    const { togglePurchaseNow } = useActions();

    let t = value

    if (t == 289) t = 1 
    else if(t == 0) t = 1

    return (
        <div className={styles.container}>
            <div className={styles.plan_container}>
                <div className={styles.about_plan}>
                    <div className={styles.title}>
                        <h6>{`${item.type}`.split(' ')[0]} <span>{`${item.type}`.split(' ')[1]} </span></h6>
                        <p>
                            {item.about}
                        </p>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.features_list}>
                            <img src="/public/images/Black_biceps.png" alt="" />
                            <div className={styles.description}>
                                <h5>01</h5>
                                <h4>Power Up</h4>
                            </div>
                        </div>
                        <div className={styles.features_list}>
                            <img src="/public/images/sport-timer-black.png" alt="" />
                            <div className={styles.description}>
                                <h5>02</h5>
                                <h4>Be Flexible</h4>
                            </div>
                        </div>
                        <div className={styles.features_list}>
                            <img src="/public/images/dumbbell-black.png" alt="" />
                            <div className={styles.description}>
                                <h5>03</h5>
                                <h4>Super Body Toning</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <h2 className={styles.about_title}>About the plan</h2>
                        <p className={styles.desc}>
                            {item.description}
                        </p>
                    </div>
                    <div className={styles.packege_for}>
                        <h2 className={styles.about_title}>Is this the right package for me?</h2>
                        <p className={styles.desc}>
                            Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc.
                            Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed.
                        </p>
                        <p className={styles.desc}>
                            Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et.
                            Suspendisse feugiat <span>scelerisque</span> et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra. <br />
                            1. Enim eu turpis egestas pretium aenean pharetra magna ac placerat.<br />
                            2. Nunc semper velit netus donec commodo.<br />
                            3. Lacus hendrerit aliquam habitant eget faucibus venenatis turpis<br />
                        </p>
                    </div>
                </div>
                <div className={styles.purchase_plan}>
                    <div className={styles.purchase_title}>
                        <h5>Get your package</h5>
                        <p>
                            Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada.
                        </p>
                    </div>
                    {/* <div className={styles.features_purchase}>
                        <h3>What’s Includes:</h3>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>{}</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>{}</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="/images/checkmark.png" alt="" />
                            <h5>{}</h5>
                        </div>
                    </div> */}
                    <div className={styles.field}>
                        <form>
                            <label>
                                Package Duration
                                <input type="text" placeholder='1 Mouth' value={value} onChange={handleChange} />
                            </label>
                        </form>
                    </div>
                    <h5 className={styles.price}>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'narrowSymbol'
                        }).format(value == 0 ? value+=1 * item.price : value * item.price)}<span>/Month</span>
                    </h5>
                    <div className={styles.cta}>
                        <Link onClick={() => togglePurchaseNow([item, Number(t)])} to={`/membership/payment/${item.id}`} className={styles.purchase} >Purchase Now</Link>
                        {/* <button onClick={() => {
                            toggleCart([item, Number(t)]);
                            toggleTotalCart([{id: item.id, price: item.price}, Number(t)]); 
                            toggleActive(1)}} className={toggleActiveStyles(1)}>
                                Add to Cart
                        </button>
                        <button onClick={() => {
                            toggleCart([item, Number(t)]); 
                            toggleTotalCart([{id: item.id, price: item.price}, Number(t)]);
                            toggleActive(2)}} className={toggleActiveStyles(2)}>
                                Remove form Cart
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPurchase;