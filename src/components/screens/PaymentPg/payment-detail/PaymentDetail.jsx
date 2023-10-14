import { useState } from "react";
import styles from "./PaymentDetail.module.css"

const PaymentDetail = ({ item }) => {
    let [value, setValue] = useState('');



    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');

        setValue(result);
    };
    let [card, setCard] = useState('');

    const handleChangeCard = event => {
        const result = event.target.value.replace(/\D/g, '');

        setCard(result);
    };

    const myObjects = [
        { id: 1, name: 'PayPal'},
        { id: 2, name: 'ApplePay'}
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
            return "circle active"
        } else {
            return "circle inactive"
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.details_destination}>
                    <h3>Get your package</h3>
                    <div className={styles.content}>
                        <div className={styles.pay_method}>
                            <h1>Pay with</h1>
                            <div className={styles.pay}>
                                <span className={toggleActiveStyles(1)} onClick={() => {
                                        toggleActive(1)
                                    }}></span>
                                <div className={styles.method}>
                                    <img src="images/paypal.png" alt="" />
                                    <h4>PayPal</h4>
                                </div>
                            </div>
                            <div className={styles.pay}>
                                <span className={toggleActiveStyles(2)} onClick={() => {
                                        toggleActive(2)
                                    }}></span>
                                <div className={styles.method}>
                                    <img src="images/apple-pay.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <h2>Or using a credit card</h2>
                        <form className={styles.input_field}>
                            <label>
                                Cardholder Name
                                <input type="text" />
                            </label>
                            <label>
                                Card Number
                                <input type="text" maxLength="18" minLength="18" value={card} onChange={handleChangeCard} placeholder="Ex:  31111 1111 1111 1111" />
                            </label>
                            <div className={styles.label_input}>
                                <label>
                                    Postal Code
                                    <input type="text" placeholder="Postal or ZIP code" />
                                </label>
                                <label>
                                    Expiration
                                    <input type="text" placeholder="MM/YY" />
                                </label>
                                <label>
                                    CVV
                                    <input type="password" value={value} maxLength="3" minLength="3" onChange={handleChange} />
                                </label>
                            </div>
                        </form>
                        <button>Confirm and pay</button>
                    </div>
                </div>
                <div className={styles.reserve}>
                    <h4>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'narrowSymbol'
                        }).format(item[0][1] * item[0][0].price)}
                    </h4>
                    <div className={styles.title}>
                        <h6>{item[0][0].type}</h6>
                        <p>{item[0][0].about}</p>
                    </div>
                    <div className={styles.features}>
                        <h3>What’s Includes:</h3>
                        <div className={styles.feature}>
                            <img src="images/checkmark-blue.png" alt="" />
                            <h5>{item[0][0].features.classes}</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="images/checkmark-blue.png" alt="" />
                            <h5>{item[0][0].features.pack}</h5>
                        </div>
                        <div className={styles.feature}>
                            <img src="images/checkmark-blue.png" alt="" />
                            <h5>{item[0][0].features.training}</h5>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h2>Package Duration</h2>
                        <span>{item[0][1]} Month</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetail;