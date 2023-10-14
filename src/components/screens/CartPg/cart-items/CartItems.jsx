import styles from "./CartItems.module.css"
import { useCartTotal } from "../../../../hooks/useCartTotal";
import { useActions } from "../../../../hooks/useActions";

const CartItems = ({ item }) => {

    const {cartTotal} = useCartTotal()
    const { DeleteFromCart } = useActions();
    const { toggleTotalCart } = useActions();

    // let arr =[...cartTotal.map(val => val[1])]
    // let amount =[...cartTotal.map(val => val[2])]
    // let id =[...cartTotal.map(val => val[0])]
    

    console.log(...id)

    return (
        <div className={styles.conatiner}>
            <h1>Your Cart</h1>
            <div className={styles.content}>
                <div className={styles.cart}>
                    {item.map(val => (
                        <div key={val[0].id} className={styles.item} >
                            <img src="\public\images\bin.png" alt="" onClick={() => {
                                toggleTotalCart(...id), 
                                DeleteFromCart(item)
                                }}/>
                            <div className={styles.value}>
                                <div className={styles.price}  >
                                    <h2>
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(val[0].price)}<span>/Month</span> <span>x {val[1]} = {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(val[0].price * val[1])}</span> 
                                    </h2>
                                </div>
                                <div className={styles.title}>
                                    <h5>{val[0].type}</h5>
                                    <p>{val[0].about}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.amount}>
                    <h2>Amout:</h2>
                    <div className={styles.amount_list}>
                        {item.map(val => (
                            <div key={val[0].id} className={styles.item_plan}>
                                <div className={styles.price_in_amount}>
                                    <h2>
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(val[0].price)}<span>/Month</span> <span>x {val[1]} = {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(val[0].price * val[1])}</span>
                                    </h2>
                                </div>
                                <h5>{val[0].type}</h5>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <h2>Total: {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(summ)}
                        </h2>
                        <button className={styles.purchase}>Confirm and pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;