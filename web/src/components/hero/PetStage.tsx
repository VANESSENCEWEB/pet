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
  const active = SLIDES[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className={styles.stage}
      data-theme={active.color}
      aria-label="PetMatch hero"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.brand}>PetMatch</p>
          <h1 className={styles.title}>
            Encontre o seu
            <br />
            melhor amigo.
          </h1>
          <p className={styles.sub}>
            Matching por estilo de vida, verificação real do adotante e 90 dias
            de suporte pós-adoção.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#encontrar">
              Quero Adotar
            </a>
            <a className={styles.outline} href="#protetores">
              Sou Protetora/ONG
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.track}>
            {SLIDES.map((slide, i) => (
              <article
                key={slide.id}
                className={`${styles.bubble} ${i === index ? styles.active : ""}`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 78vw, 360px"
                  priority={i === 0}
                />
              </article>
            ))}
          </div>

          <div className={styles.dots}>
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                aria-label={`Ver pet ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}