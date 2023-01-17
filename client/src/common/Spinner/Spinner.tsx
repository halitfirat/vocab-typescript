import React from "react";

import styles from "./Spinner.module.scss";

interface props {
  inline?: boolean;
}

const Spinner: React.FC<props> = ({ inline }) => {
  return inline ? (
    <i className={styles.inlineSpinner}></i>
  ) : (
    <div className={styles.spinner}></div>
  );
};

export default Spinner;
