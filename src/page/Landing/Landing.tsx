import React, { useState } from "react";
import styles from "./Landing.module.css";
import LandingHeader from "../../common/header/LandingHeader/LandingHeader";
import LandingMainContainer from "../../container/Landing/LandingMainContainer";
import LandingMainVisual from "../../common/main/Landing/LandingMainVisual/LandingMainVisual";
import LandingIntro from "../../common/main/Landing/LandingIntro/LandingIntro";
import LandingWarning from "../../common/main/Landing/LandingWarning/LandingWarning";
import LandingFooter from "../../common/footer/LandingFooter/LandingFooter";

const Landing: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (event: React.UIEvent) => {
    const header = event.currentTarget.firstElementChild;
    const headerHeight = header?.getBoundingClientRect().height;
    if (headerHeight) {
      if (event.currentTarget.scrollTop > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  return (
    <div className={styles.tempContainer} onScroll={handleScroll}>
      <LandingHeader isScrolled={isScrolled} />
      <LandingMainContainer>
        <LandingMainVisual />
        <LandingIntro />
        <LandingWarning />
      </LandingMainContainer>
      <LandingFooter />
    </div>
  );
};

export default Landing;
