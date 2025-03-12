import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1>Where Every Event Finds Its Venue</h1>
        <p>บริการสถานที่จัดเลี้ยงสำหรับทุกโอกาสพิเศษของคุณ</p>
      </div>
    </div>
  );
};

export default Banner;