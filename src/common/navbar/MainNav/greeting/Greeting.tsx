import React from "react";
import styles from "./Greeting.module.css";

declare interface GreetingInterface {
  userName: string | null | undefined;
}

const Greeting: React.FC<GreetingInterface> = ({ userName }) => {
  return (
    <li className={styles.greeting}>
      <h2 className={styles.greetingMessage}>안녕하세요,{userName}님</h2>
    </li>
  );
};

export default React.memo(Greeting);
