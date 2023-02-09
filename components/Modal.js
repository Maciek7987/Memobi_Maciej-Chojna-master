import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "@/styles/Modal.module.scss";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <>
      <a onClick={openModal} className={styles.link}>
        Copyrights & Cookies
      </a>
      <Popup
        closeOnDocumentClick
        open={open}
        onClose={closeModal}
        modal
        lockScroll
        nested
      >
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_203_209)">
                <path d="M50 0H0V50H50V0Z" fill="#002C42" />
                <path
                  d="M33 17L17 33"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M33 33L17 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_203_209">
                  <rect width="50" height="50" rx="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className={styles.header}> Copyrights & Cookies </div>
          <article className={styles.article}>
            <h2 className={styles.subtitle}>Lorem ipsum</h2>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              sodales odio. Fusce tellus libero, varius ut lorem vel, egestas
              suscipit ante. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur eu arcu
              sodales, efficitur augue in, bibendum purus. Vivamus vel pretium
              ipsum. Aenean vitae nunc quis justo tempus viverra et ut lacus.
              Fusce luctus cursus nunc, a facilisis leo cursus fringilla.
            </p>
          </article>
          <article className={styles.article}>
            <h2 className={styles.subtitle}>Lorem ipsum</h2>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              sodales odio. Fusce tellus libero, varius ut lorem vel, egestas
              suscipit ante. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur eu arcu
              sodales, efficitur augue in, bibendum purus. Vivamus vel pretium
              ipsum. Aenean vitae nunc quis justo tempus viverra et ut lacus.
              Fusce luctus cursus nunc, a facilisis leo cursus fringilla.
            </p>
          </article>
          <article className={styles.article}>
            <h2 className={styles.subtitle}>Lorem ipsum</h2>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              sodales odio. Fusce tellus libero, varius ut lorem vel, egestas
              suscipit ante. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur eu arcu
              sodales, efficitur augue in, bibendum purus. Vivamus vel pretium
              ipsum. Aenean vitae nunc quis justo tempus viverra et ut lacus.
              Fusce luctus cursus nunc, a facilisis leo cursus fringilla.
            </p>
          </article>
          <article className={styles.article}>
            <h2 className={styles.subtitle}>Lorem ipsum</h2>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              sodales odio. Fusce tellus libero, varius ut lorem vel, egestas
              suscipit ante. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur eu arcu
              sodales, efficitur augue in, bibendum purus. Vivamus vel pretium
              ipsum. Aenean vitae nunc quis justo tempus viverra et ut lacus.
              Fusce luctus cursus nunc, a facilisis leo cursus fringilla.
            </p>
          </article>
        </div>
      </Popup>
    </>
  );
}
