import React from "react";
import styles from "./LandingWarning.module.css";

const LandingWarning = () => {
  return (
    <section className={styles.main_warning}>
      <div className={styles.warning_content}>
        <img className={styles.warning_sign} src="images/warning.svg" alt="warning sign" />
        <div className={styles.warning_description_box}>
          <h2 className={styles.warning_title}>주의사항</h2>
          <p className={styles.warning_description}>토이 프로젝트용 사이트입니다</p>
          <p className={styles.warning_description}>실존 인물의 개인 정보 같은</p>
          <p className={styles.warning_description}>민감한 정보를 작성하지 않도록 주의해주세요</p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LandingWarning);
