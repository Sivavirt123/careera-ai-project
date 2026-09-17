import { useState } from "react";
import styles from "./Audience.module.css";

function Audience() {
  // Store selected user type
  const [userType, setUserType] = useState("");

  // Store AI readiness answers
  const [answers, setAnswers] = useState({
    tools: false,
    concepts: false,
    productivity: false,
    project: false,
  });

  // Handle checkbox changes
  const handleAnswer = (name) => {
    setAnswers({
      ...answers,
      [name]: !answers[name],
    });
  };

  // Calculate AI readiness percentage
  const score = Object.values(answers).filter(Boolean).length * 25;

  return (
    <section id="programs" className={styles.section}>
      <div className={styles.container}>
        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className={styles.heading}>
          <span>DISCOVER YOUR PATH</span>

          <h2>What's Your Next Move?</h2>

          <p>
            Whether you're starting your career or already have experience,
            discover how AI can help you move forward.
          </p>
        </div>

        {/* =========================
            FRESHER / PROFESSIONAL
        ========================== */}
        <div className={styles.buttons}>
          <button
            className={userType === "fresher" ? styles.active : ""}
            onClick={() => setUserType("fresher")}
          >
            🌱 I'm a Fresher
          </button>

          <button
            className={userType === "professional" ? styles.active : ""}
            onClick={() => setUserType("professional")}
          >
            💼 I'm a Professional
          </button>
        </div>

        {/* =========================
            PERSONALIZED AI PATH
        ========================== */}

        {userType && (
          <div className={styles.pathCard}>
            {userType === "fresher" ? (
              <>
                <div className={styles.cardIcon}>🚀</div>

                <h3>AI Career Starter</h3>

                <p>
                  Start your career with the skills employers are looking for in
                  the AI-powered world.
                </p>

                <ul>
                  <li>✓ AI Fundamentals</li>
                  <li>✓ Prompt Engineering</li>
                  <li>✓ AI-powered Projects</li>
                  <li>✓ Career Preparation</li>
                </ul>

                <button className={styles.cta}>Explore My Path →</button>
              </>
            ) : (
              <>
                <div className={styles.cardIcon}>⚡</div>

                <h3>AI Career Accelerator</h3>

                <p>
                  Use AI to enhance your existing experience, productivity and
                  career opportunities.
                </p>

                <ul>
                  <li>✓ AI Productivity</li>
                  <li>✓ Automation</li>
                  <li>✓ AI Tools</li>
                  <li>✓ Industry Applications</li>
                </ul>

                <button className={styles.cta}>Upgrade My Skills →</button>
              </>
            )}
          </div>
        )}

        {/* =========================
            AI READINESS CHECK
        ========================== */}

        <div className={styles.readiness}>
          <div className={styles.heading}>
            <span>AI READINESS CHECK</span>

            <h2>How AI-Ready Are You?</h2>

            <p>
              Answer four simple questions and discover your current AI
              readiness.
            </p>
          </div>

          {/* QUESTIONS */}

          <div className={styles.questions}>
            <label className={answers.tools ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={answers.tools}
                onChange={() => handleAnswer("tools")}
              />

              <span>I use AI tools</span>
            </label>

            <label className={answers.concepts ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={answers.concepts}
                onChange={() => handleAnswer("concepts")}
              />

              <span>I understand basic AI concepts</span>
            </label>

            <label className={answers.productivity ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={answers.productivity}
                onChange={() => handleAnswer("productivity")}
              />

              <span>I use AI for productivity</span>
            </label>

            <label className={answers.project ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={answers.project}
                onChange={() => handleAnswer("project")}
              />

              <span>I have built an AI project</span>
            </label>
          </div>

          {/* =========================
              SCORE
          ========================== */}

          <div className={styles.score}>
            <h3>Your AI Readiness</h3>

            <div className={styles.percentage}>{score}%</div>

            {/* PROGRESS BAR */}

            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${score}%`,
                }}
              ></div>
            </div>

            {/* DYNAMIC MESSAGE */}

            <p>
              {score === 0 && "Start your AI journey today 🚀"}

              {score === 25 && "Great start! Keep exploring AI."}

              {score === 50 && "You're building a strong AI foundation."}

              {score === 75 && "You're almost there! Keep learning."}

              {score === 100 &&
                "You're ready to take your AI skills further! 🚀"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience;
