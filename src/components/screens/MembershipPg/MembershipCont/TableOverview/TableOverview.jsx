import styles from "./TableOverview.module.css"

const TableOverview = () => {
    return (
        <div className={styles.overview}>
            <table>
                <thead>
                    <tr>
                        <th scope="col" className={styles.content_header}>Overview</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Classes per month</th>
                        <td className={styles.content}>1</td>
                        <td className={styles.content}>8</td>
                        <td className={styles.content}>20</td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Access to online classes</th>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Health & fitness guides</th>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Full Warmup guide</th>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Access video Link</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Full diet plan</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Nutritional support</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Full customize plan</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>Daily progress check up</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                    <tr className={styles.content_tr}>
                        <th scope="row" className={styles.content_name}>All Intermediate package</th>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/close-circle.png" alt="" /></td>
                        <td className={styles.content}><img src="images/checkmark.png" alt="" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableOverview;