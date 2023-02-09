import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Main.module.scss";

import person360 from "../images/person360.webp";
import person1920 from "../images/person1920.webp";

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const vocabulary = useRef();
  const animateVocabulary = () => {
    if (
      vocabulary.current.getBoundingClientRect().y <
      (window.innerHeight / 4) * 3
    )
      setIsVisible(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", animateVocabulary);
    return () => window.removeEventListener("scroll", animateVocabulary);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.top__title}>
          Dlaczego nauka z Memobi jest efektywniejsza?
        </h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.element}>
          <div className={`${styles.element__top} ${styles.firstEl}`}>
            <div className={styles.icon} />
            <h2 className={styles.subtitle}>Oszczędzasz czas</h2>
          </div>
          <div className={styles.element__bottom}>
            <p className={styles.description}>
              <span className={styles.small}>
                Fiszki dopasowane do rozdziałów i lekcji
              </span>{" "}
              z podręczników Wydawnictwa Draco – zapomnij
              <span className={styles.small}>
                {" "}
                o przepisywaniu słówek z podręcznika.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.element}>
          <div className={`${styles.element__top} ${styles.secondEl}`}>
            <div className={styles.icon}>
              <svg
                viewBox="0 0 38 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_693_31)">
                  <path
                    d="M19.6433 1H5.19049C2.87615 1 1 2.87615 1 5.19049V34.6919C1 37.0062 2.87615 38.8824 5.19049 38.8824H19.6433C21.9577 38.8824 23.8338 37.0062 23.8338 34.6919V5.19049C23.8338 2.87615 21.9577 1 19.6433 1Z"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.06982 7.11399H23.7641"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.06982 32.7684H23.7641"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.3613 35.7845H14.4726"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34.6266 11.4662H18.9626C17.7706 11.4662 16.8042 12.4326 16.8042 13.6247C16.8042 14.8167 17.7706 15.7831 18.9626 15.7831H34.6266C35.8187 15.7831 36.785 14.8167 36.785 13.6247C36.785 12.4326 35.8187 11.4662 34.6266 11.4662Z"
                    fill="#57E296"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26.2703 15.8139H11.9013C10.7093 15.8139 9.74292 16.7803 9.74292 17.9723C9.74292 19.1644 10.7093 20.1308 11.9013 20.1308H26.2703C27.4623 20.1308 28.4287 19.1644 28.4287 17.9723C28.4287 16.7803 27.4623 15.8139 26.2703 15.8139Z"
                    fill="#57E296"
                    stroke="#002C42"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_693_31">
                    <rect width="37.7849" height="39.8824" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className={styles.subtitle}>Korzystasz ze Smartfona</h2>
          </div>
          <div className={styles.element__bottom}>
            <p className={styles.description}>
              Graj w fiszki w drodze do szkoły, ucz się podczas spaceru, bez
              konieczności posiadania przy sobie podręcznika.
            </p>
          </div>
        </div>
        <div className={styles.element}>
          <div className={`${styles.element__top} ${styles.thirdEl}`}>
            <div className={styles.icon}>
              <svg
                width="52"
                height="43"
                viewBox="0 0 52 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_694_25)">
                  <path
                    d="M27.549 5.83199L15.4473 1.24465C13.5094 0.510073 11.343 1.48552 10.6084 3.42338L1.24464 28.1256C0.510067 30.0634 1.48552 32.2298 3.42337 32.9644L15.5251 37.5518C17.4629 38.2863 19.6293 37.3109 20.3639 35.373L29.7277 10.6709C30.4623 8.733 29.4868 6.56657 27.549 5.83199Z"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30.8519 8.03296H17.9099C15.8375 8.03296 14.1575 9.71298 14.1575 11.7854V38.2028C14.1575 40.2752 15.8375 41.9552 17.9099 41.9552H30.8519C32.9243 41.9552 34.6043 40.2752 34.6043 38.2028V11.7854C34.6043 9.71298 32.9243 8.03296 30.8519 8.03296Z"
                    fill="#002C42"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M43.825 14.9929L48.2091 19.377L43.825 14.9929ZM46.2959 12.7361C46.0017 12.8869 45.7326 13.0828 45.4991 13.3168L26.4652 32.3508C26.3277 32.4882 26.2437 32.6702 26.2282 32.8639L25.8815 37.1964C25.8683 37.3608 26.0085 37.4962 26.1722 37.4774L30.6175 36.9684C30.8012 36.9474 30.9722 36.8648 31.1029 36.7341L50.0091 17.828C50.9428 16.8923 51.2007 15.4767 50.6568 14.2719C50.3814 13.5303 49.7963 12.9457 49.0546 12.6697C48.1722 12.2742 47.1577 12.2992 46.2959 12.7373"
                    fill="transparent"
                  />
                  <path
                    d="M43.825 14.9929L48.2091 19.377M46.2959 12.7361C46.0017 12.8869 45.7326 13.0828 45.4991 13.3168L26.4652 32.3508C26.3277 32.4882 26.2437 32.6702 26.2282 32.8639L25.8815 37.1964C25.8683 37.3607 26.0085 37.4962 26.1722 37.4774L30.6175 36.9684C30.8012 36.9474 30.9722 36.8648 31.1029 36.7341L50.0091 17.828C50.9428 16.8923 51.2007 15.4767 50.6568 14.2719C50.3814 13.5303 49.7963 12.9457 49.0546 12.6697C48.1722 12.2742 47.1577 12.2992 46.2959 12.7373"
                    stroke="transparent"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  <path
                    d="M18.0303 15.6748H30.7314"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.0303 15.6748H30.7314"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.0303 15.6748H30.7314"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M43.825 14.9929L48.2091 19.377M46.2959 12.7361C46.0017 12.8869 45.7326 13.0828 45.4991 13.3168L26.4652 32.3508C26.3277 32.4882 26.2437 32.6702 26.2282 32.8639L25.8815 37.1964C25.8683 37.3607 26.0085 37.4962 26.1722 37.4774L30.6175 36.9684C30.8012 36.9474 30.9722 36.8648 31.1029 36.7341L50.0091 17.828C50.9428 16.8923 51.2007 15.4767 50.6568 14.2719C50.3814 13.5303 49.7963 12.9457 49.0546 12.6697C48.1722 12.2742 47.1577 12.2992 46.2959 12.7373"
                    stroke="#F3D86C"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    fill="#002c42"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_694_25">
                    <rect width="51.9387" height="42.9552" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className={styles.subtitle}>Uczysz się szybciej</h2>
          </div>
          <div className={styles.element__bottom}>
            <p className={styles.description}>
              Lepsze zapamiętywanie dzięki różnorodnym trybom nauki języka:
              fiszki, quiz, pisanie.
            </p>
          </div>
        </div>
        <div className={styles.element}>
          <div className={`${styles.element__top} ${styles.fourthEl}`}>
            <div className={styles.icon} />
            <h2 className={styles.subtitle}>Zdobywasz nowe umiejętności</h2>
          </div>
          <div className={styles.element__bottom}>
            <p className={styles.description}>
              Wybierz rozdział dopasowany do swojego poziomu i miej satysfakcję
              z kolejnych zaliczonych rozdziałów i lekcji.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.useApp}>
        <div className={styles.useApp__picture}>
          <Image
            className={styles.img360}
            src={person360}
            alt="woman with phone"
            quality={100}
          />
          <Image
            className={styles.img1920}
            src={person1920}
            alt="woman with phone"
            quality={100}
          />
        </div>
        <div
          ref={vocabulary}
          className={`${styles.useApp__bottom} ${
            isVisible ? styles.animation : null
          }`}
        >
          <div className={`${styles.vocabulary} ${styles.quetal}`} />
          <div className={`${styles.vocabulary} ${styles.hola}`} />
        </div>
      </section>
    </main>
  );
}
