import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <h2>
        <span>AI</span>Career
      </h2>

      <p>Learn. Adapt. Create. Grow with AI.</p>

      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <small>© 2026 AICareer. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
