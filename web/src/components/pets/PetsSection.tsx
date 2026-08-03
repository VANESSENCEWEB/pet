import { PETS } from "@/data/pets";
import { PetCard } from "./PetCard";
import styles from "./PetsSection.module.css";

export function PetsSection() {
  return (
    <section className={styles.section} id="encontrar" aria-labelledby="encontrar-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Seus matches de hoje</p>
            <h2 id="encontrar-title" className={styles.title}>
              Perfis <span className={styles.hl}>compatíveis</span> com você.
            </h2>
          </div>
          <a href="#encontrar" className={styles.all}>
            Ver todos
          </a>
        </div>

        <div className={styles.track} tabIndex={0} aria-label="Lista de pets compatíveis">
          {PETS.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
}
