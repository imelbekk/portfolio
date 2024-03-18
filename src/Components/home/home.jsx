import React from "react";
import styles from "../../ui/home/home.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
    <main className={styles.home}>
      <header className={styles.header}>
        <div className={styles.header_texts}>
          <h1>Hi, I’m Elbek</h1>
          <p>
            During my <span>4 years</span> as{" "}
            <span>Front-End Software Engineer</span>, My role has extended
            beyond coding to effective communication with various departments,
            to define new features and spearheading the development of new apps.
          </p>
          <div className={styles.header_buttons}>
            <a
              className={styles.header_download}
              href="/downloads/developer_img.png"
              download
            >
              Download CV
            </a>
            <Link to="/projects" className={styles.header_view}>
              See projects
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/developer_img.png"
            alt="avatar"
            className={styles.header_img}
            loading="lazy"
          />
        </div>
      </header>
      <section className={styles.section}>
        <h1 className={styles.section_title}>
          The technologies I’ve been using...
        </h1>
        <div className={styles.section_items}>
          <Swiper slidesPerView={3} spaceBetween={30}>
            <SwiperSlide>
              <li className={styles.javascript}>
                <img src="/JavaScript.png" alt="javascript" loading="lazy" />
                <span>JavaScript</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.react}>
                <img src="/React.png" alt="react" loading="lazy" />
                <span>React</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.next}>
                <img src="/Next-js.svg" alt="next-js" loading="lazy" />
                <span>Next.JS</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.typescript}>
                <img src="/TypeScript.png" alt="typescript" loading="lazy" />
                <span>TypeScript</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.vite}>
                <img src="/Vite.svg" alt="vite" loading="lazy" />
                <span>Vite</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.html}>
                <img src="/Html.svg" alt="html" loading="lazy" />
                <span>Html</span>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={styles.css}>
                <img src="/Css.svg" alt="css" loading="lazy" />
                <span>Css</span>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className={styles.texts}>
        <h1>JavaScript</h1>
        <h1>React</h1>
        <h1>Coffee</h1>
      </div>
    </main>
    <Footer/>
    </>
  );
}
