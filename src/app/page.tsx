"use client";
import Header from "./components/header";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "./img/home_banner_1.jpeg";
import img2 from "./img/home_banner_2.jpeg";
import img3 from "./img/home_banner_3.jpeg";
import styles from "./styles/home.module.scss";
import clsx from "clsx";

const images = [
  img1, img2, img3
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.homeMainSection}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className={styles.carousel}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={800} 
                  height={500}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h1>
            Vertrauen Sie uns Ihr Fahrzeug an – Ihre Werkstatt mit makelloser
            Reputation.
          </h1>
        </section>
        <section>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
        </section>
        <section>
          <div>
            <h2>Hallo! Willkommen in unserer Werkstatt</h2>
          </div>
          <div></div>
        </section>
      </main>
      <footer>
        <div>Kontakt</div>
        <div>Social media</div>
      </footer>
    </>
  );
}
