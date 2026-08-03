"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PetStage.module.css";

type PetSlide = {
  id: string;
  color: "mint" | "yellow" | "blue" | "pink";
  src: string;
};

const SLIDES: PetSlide[] = [
  {
    id: "1",
    color: "mint",
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
  },
  {
    id: "2",
    color: "yellow",
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
  },
  {
    id: "3",
    color: "blue",
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
  },
  {
    id: "4",
    color: "pink",
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
  },
];

export function PetStage() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const active = SLIDES[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 3200);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section
      id="home"
      className={styles.stage}
      data-theme={active.color}
      aria-label="PetMatch hero"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.brand}>PetMatch</p>
          <h1 className={styles.title}>
            Find your
            <br />
            best friend.
          </h1>
          <p className={styles.sub}>
            Lifestyle matching, real adopter verification, and 90 days of
            post-adoption support.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#encontrar">
              I want to adopt
            </a>
            <a className={styles.outline} href="#protetores">
              I&apos;m a shelter / rescuer
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.orbitStage} aria-hidden="true">
            <div className={styles.ring} />

            <div className={styles.orbit}>
              {SLIDES.map((slide, i) => (
                <article
                  key={slide.id}
                  className={`${styles.satellite} ${i === index ? styles.isEntering : ""}`}
                  style={{ ["--slot" as string]: String(i) }}
                >
                  <div className={styles.satelliteInner}>
                    <Image src={slide.src} alt="" fill sizes="140px" />
                  </div>
                </article>
              ))}
            </div>

            <article className={styles.center} key={active.id}>
              <Image
                src={active.src}
                alt=""
                fill
                sizes="280px"
                priority
              />
            </article>
          </div>

          <div className={styles.dots}>
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                aria-label={`Show pet ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}