import styles from "./Nav.module.css";

const links = [
  { href: "#encontrar", label: "Encontrar Pets" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#protetores", label: "ONGs & Protetores" },
  { href: "#historias", label: "Histórias" },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} aria-label="PetMatch">
          <span className={styles.logoPet}>Pet</span>
          <span className={styles.logoMatch}>Match</span>
        </a>

        <nav className={styles.links} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#encontrar" className={styles.cta}>
            Fazer Match
          </a>
        </div>
      </div>
    </header>
  );
}
