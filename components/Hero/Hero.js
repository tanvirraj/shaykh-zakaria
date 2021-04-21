import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.section}>
        <div className={styles.sectionBody}>
          <div className={styles.sectionTitle}>
            শায়খ মুহাম্মাদ যাকারিয়া আব্দুল্লাহ
          </div>
          <h3 className={styles.sectionDescription}>
            উস্তাদ, মারকাযুদ দাওয়াহ আল ইসলামিয়া ঢাকা, সহ-সম্পাদক- মাসিক আলকাউসার
            |  <span>বিস্তারিত →</span>
          </h3>
        </div>
      </section>
    </div>
  );
}
