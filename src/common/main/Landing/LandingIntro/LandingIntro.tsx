import React from "react";
import styles from "./LandingIntro.module.css";

const LandingIntro = () => {
  const handleHover = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.preventDefault();
    if (e.currentTarget.hasAttribute("controls")) {
      e.currentTarget.removeAttribute("controls");
    } else {
      e.currentTarget.setAttribute("controls", "controls");
    }
  };
  return (
    <section className={styles.main_intro}>
      <div className={styles.intro_content}>
        <div className={styles.intro_description_box}>
          <h2 className={styles.intro_title}>쉽고 간단하게 명함을 관리해 보세요</h2>
          <p className={styles.intro_description}>명함을 만들고 등록하면 끝</p>
          <p className={styles.intro_description}>등록한 명함을 빠르게 찾을 수 있어요</p>
        </div>
        <video
          className={styles.dummy_video}
          muted
          preload="none"
          poster="/images/igobada_main_poster.PNG"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <source src="/media/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default LandingIntro;
