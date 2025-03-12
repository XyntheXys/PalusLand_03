import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/images/card.jpg" alt="Event Venue" />
      <div className={styles.content}>
        <h2>จองสถานที่จัดเลี้ยงวันนี้!</h2>
        <p>สัมผัสประสบการณ์สุดพิเศษกับสถานที่จัดเลี้ยงที่ดีที่สุด</p>
      </div>
    </div>
  );
};

export default Card;
