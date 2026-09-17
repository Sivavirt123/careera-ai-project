import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.logo}>
          <span>Elev</span>AI<span>te</span>
        </a>

        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#benefits">Benefits</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
