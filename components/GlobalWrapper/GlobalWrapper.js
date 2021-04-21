import Head from "next/head";
import Footer from "../Footer/Footer";
import styles from "./GlobalWrapper.module.css";

export default function GlobalWrapper({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>শায়খ মোহাম্মাদ যাকারিয়া </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}
