import React, { Component } from "react";
import styles from "./Modal.module.css";

export interface ModalPropsInterface {
  openFlag: boolean;
  onClose: () => void;
  headerTextContent: string;
  children: React.ReactNode;
}

export default class Modal extends Component<ModalPropsInterface> {
  render() {
    const { openFlag, onClose, headerTextContent, children } = this.props;
    return (
      <div className={openFlag ? [styles.modal, styles.activate].join(" ") : styles.modal}>
        {openFlag && (
          <>
            <div className={styles.bg} onClick={onClose}></div>
            <section className={styles.container}>
              <header className={styles.header}>
                {headerTextContent}
                <button className={styles.closeButton} onClick={onClose}>
                  &times;
                </button>
              </header>
              <main className={styles.main}>{children}</main>
              <footer>
                <button className="close" onClick={onClose}>
                  완료
                </button>
              </footer>
            </section>
          </>
        )}
      </div>
    );
  }
}
