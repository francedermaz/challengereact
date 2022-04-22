import React from "react";
import styles from "./Loader.module.css";
import gif from "./assets/loading.gif";

export default function Loader() {
  return (
    <div className={styles.cont}>
      <img src={gif} className={styles.gif} alt="gif" />
    </div>
  );
}
