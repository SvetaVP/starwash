"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/slider.module.scss";

interface CustomSliderProps {
  images: StaticImageData[];
}

export default function CustomSlider({ images }: CustomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.slide}>
            <Image src={img} alt={`Slide ${index}`} fill className={styles.image} />
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>‹</button>
      <button className={styles.next} onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>›</button>
    </div>
  );
}
