import React from "react";
import styles from "./Greeting.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

declare interface GreetingInterface {}

const Greeting: React.FC<GreetingInterface> = () => {
  const user = useSelector((state: RootState) => state.userSlice.userObj);
  return (
    <li className={styles.greeting}>
      <h2 className={styles.greetingMessage}>안녕하세요,{user?.displayName}님</h2>
    </li>
  );
};

export default React.memo(Greeting);
