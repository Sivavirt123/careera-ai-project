import styles from "./Hero.module.css";

function Hero() {
  const handleStart = () => {
    document.getElementById("programs").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow}></div>

      <div className={styles.content}>
        <span className={styles.badge}>🚀 THE FUTURE IS AI</span>

        <h1>
          Build Your
          <span> Future </span>
          With AI
        </h1>

        <p>
          Whether you're starting your career or already experienced, learn how
          AI can help you work smarter, create faster and grow further.
        </p>

        <div className={styles.buttons}>
          <button onClick={handleStart}>Start Your AI Journey →</button>

          <a href="#about">Explore More</a>
        </div>
      </div>

      <div className={styles.orb}>
        <div>AI</div>
      </div>
    </section>
  );
}

export default Hero;
