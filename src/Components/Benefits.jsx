import styles from "./Benefits.module.css";

function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: "⚡",
      title: "Work Smarter",
      description:
        "Automate repetitive tasks and spend more time on meaningful work.",
    },
    {
      id: 2,
      icon: "🚀",
      title: "Grow Faster",
      description: "Use AI to learn new skills and accelerate your career.",
    },
    {
      id: 3,
      icon: "💡",
      title: "Create More",
      description:
        "Turn your ideas into solutions faster with AI-powered tools.",
    },
  ];

  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.heading}>
        <span>WHY AI?</span>
        <h2>Your Advantage Starts Here</h2>
      </div>

      <div className={styles.grid}>
        {benefits.map((benefit) => (
          <div className={styles.card} key={benefit.id}>
            <div className={styles.icon}>{benefit.icon}</div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
