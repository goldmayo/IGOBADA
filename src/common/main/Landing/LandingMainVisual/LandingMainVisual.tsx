import React from "react";
import styles from "./LandingMainVisual.module.css";
import { Link } from "react-router-dom";

const LandingMainVisual = () => {
  return (
    <section className={styles.main_visual}>
      <div className={styles.title_description_box}>
        <h1 className={styles.title}>이고바다</h1>
        <p className={styles.description}>
          비즈니스의 필수요소 명함을 손쉽게 관리해보세요. 이고바다로 내가 가진 명함들을 한번에 확인할 수 있습니다.
        </p>
        <button className={styles.get_start}>
          <Link to={"/login"}>지금 시작하기</Link>
        </button>
      </div>
      <div className={styles.decoration_box}>
        <img className={styles.star_cloud} src="images/star.svg" alt="star cloud" />
        <img className={styles.user_card} src="images/user_card.svg" alt="id card" />
        <img className={styles.user_research} src="images/user_research.svg" alt="research" />
      </div>
    </section>
  );
};

export default LandingMainVisual;
