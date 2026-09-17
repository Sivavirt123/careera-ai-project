import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <span>THE NEW WAY FORWARD</span>

        <h2>
          Don't Compete With AI.
          <strong> Learn to Work With It.</strong>
        </h2>

        <p>
          AI is changing how people learn, create and work. The future belongs
          to people who can combine human creativity with intelligent
          technology.
        </p>

        <div className={styles.stats}>
          <div>
            <h3>AI</h3>
            <p>Powered Learning</p>
          </div>

          <div>
            <h3>∞</h3>
            <p>Possibilities</p>
          </div>

          <div>
            <h3>1</h3>
            <p>Next Step</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
