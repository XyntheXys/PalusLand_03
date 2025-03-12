import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/venue2.jpg'}
                alt='Venue Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
           <div className={styles.cardtext}>Venue 1</div>
        </div>
    )
}
