import styles from "./CoachingStaff.module.css"
import Staff from "./staff/Staff";

const CoachingStaff = () => {
    return (
        <div className={styles.container}>
            <div className={styles.team_container}>
                <div className={styles.title}>
                    <h6>Meet <span>the Team</span></h6>
                    <p>
                        OurPersonal Trainers are experienced and highly qualified – 
                        and they’re all ontheir own inspiring journey too. 
                        Click our photos to read more.
                    </p>
                </div>
                <Staff />
            </div>
            
        </div>
    );
}

export default CoachingStaff;