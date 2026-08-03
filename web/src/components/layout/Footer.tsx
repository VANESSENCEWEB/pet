import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            <span className={styles.logoPet}>Pet</span>
            <span className={styles.logoMatch}>Match</span>
          </p>
          <p className={styles.tagline}>
            Conectando lares e patas com adoção responsável.
          </p>
        </div>

        <div className={styles.cols}>
          <div>
            <h3 className={styles.colTitle}>Adotar</h3>
            <ul className={styles.list}>
              <li>
                <a href="#encontrar">Encontrar Pets</a>
              </li>
              <li>
                <a href="#encontrar">Matches</a>
              </li>
              <li>
                <a href="#historias">Histórias</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.colTitle}>ONGs</h3>
            <ul className={styles.list}>
              <li>
                <a href="#protetores">Cadastrar ONG</a>
              </li>
              <li>
                <a href="#como-funciona">Como funciona</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.colTitle}>Ajuda</h3>
            <ul className={styles.list}>
              <li>
                <a href="#ajuda">Central de ajuda</a>
              </li>
              <li>
                <a href="#privacidade">Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 PetMatch — evolução independente do protótipo Coday.</p>
      </div>
    </footer>
  );
}
