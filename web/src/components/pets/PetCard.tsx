"use client";

import Image from "next/image";
import { useState } from "react";
import type { Pet } from "@/data/pets";
import styles from "./PetCard.module.css";

type PetCardProps = {
  pet: Pet;
};

const BADGE_LABEL: Record<NonNullable<Pet["badge"]>, string> = {
  destaque: "Destaque",
  novo: "Novo",
  urgente: "Urgente",
};

export function PetCard({ pet }: PetCardProps) {
  const [liked, setLiked] = useState(Boolean(pet.liked));
  const matchTone = pet.match >= 85 ? "high" : "med";

  return (
    <article className={styles.card}>
      <div className={styles.media} style={{ background: pet.tone }}>
        <Image
          src={pet.image}
          alt={`${pet.name}, ${pet.species}`}
          fill
          sizes="260px"
          className={styles.image}
        />
        <div className={styles.overlay} />

        <div className={`${styles.match} ${styles[matchTone]}`}>
          <span className={styles.matchDot} aria-hidden="true" />
          Match {pet.match}%
        </div>

        {pet.badge ? (
          <span className={`${styles.badge} ${styles[pet.badge]}`}>
            {BADGE_LABEL[pet.badge]}
          </span>
        ) : null}

        <button
          type="button"
          className={`${styles.fav} ${liked ? styles.liked : ""}`}
          aria-pressed={liked}
          aria-label={
            liked
              ? `Remover ${pet.name} dos favoritos`
              : `Favoritar ${pet.name}`
          }
          onClick={() => setLiked((value) => !value)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <h3 className={styles.name}>{pet.name}</h3>
          <span
            className={`${styles.sex} ${pet.sex === "f" ? styles.female : styles.male}`}
          >
            {pet.sex === "f" ? "Fêmea" : "Macho"}
          </span>
        </div>

        <p className={styles.meta}>
          {pet.age} · {pet.species} · {pet.size} · {pet.distance}
        </p>

        <ul className={styles.tags}>
          {pet.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <a className={styles.profile} href={`#pet-${pet.id}`}>
          Ver perfil completo
        </a>
      </div>
    </article>
  );
}
