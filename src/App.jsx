import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const roles = [
  {
    title: 'Senior Software Engineer',
    period: 'Aug 2023 — Present',
    summary:
      'Leading end-to-end product delivery and raising engineering quality across the team.',
    highlights: [
      'Own planning, architecture, development and delivery of customer-facing features.',
      'Modernize legacy code to improve performance, maintainability and developer velocity.',
      'Mentor junior engineers and review code for quality, consistency and best practices.',
    ],
  },
  {
    title: 'Software Engineer',
    period: 'Aug 2021 — Jul 2023',
    summary:
      'Built responsive products and dependable backend integrations for data-intensive applications.',
    highlights: [
      'Developed performant front-end experiences using React.js.',
      'Designed REST API integrations and resolved production software defects.',
      'Documented engineering processes to make onboarding faster and more consistent.',
    ],
  },
  {
    title: 'Automation Engineer → Senior Automation Engineer',
    period: 'Aug 2019 — Jul 2021',
    summary:
      'Created configurable automation systems in a fast-paced agile environment.',
    highlights: [
      'Built a configurable search API with custom filtering and sorting logic.',
      'Maintained release documentation and supported reliable project delivery.',
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'LLM-Powered Newsletter Generation',
    description:
      'An alert-notification pipeline that enriches market data and uses Groq-powered LLM prompts to generate factual, investor-ready newsletter summaries.',
    impact: 'Automated end-to-end',
    tags: ['Node.js', 'Groq LLM', 'REST APIs', 'Puppeteer'],
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Real-Time Platform Enhancements',
    description:
      'A multi-layer caching architecture using Cache Storage, IndexedDB and Service Workers, paired with live Socket.IO updates for a high-traffic SaaS portal.',
    impact: '500ms → 150ms',
    tags: ['React', 'Socket.IO', 'IndexedDB', 'Service Workers'],
    icon: Zap,
  },
  {
    number: '03',
    title: 'Legacy Codebase Modernisation',
    description:
      'Led an incremental migration from class components and Reflux to functional hooks and Redux Toolkit, improving testability and delivery speed.',
    impact: 'Multiple modules',
    tags: ['React', 'Redux Toolkit', 'JavaScript', 'Testing'],
    icon: Code2,
  },
  {
    number: '04',
    title: 'KPI Console — Analytics Dashboard',
    description:
      'A config-driven internal metrics platform with automated data aggregation, API services and responsive dashboards for real-time operational insights.',
    impact: 'Real-time insights',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Cron'],
    icon: BriefcaseBusiness,
  },
]

const skills = [
  {
    label: 'Frontend',
    items: ['JavaScript', 'React.js', 'Redux Toolkit', 'Responsive UI', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.IO'],
  },
  {
    label: 'Engineering',
    items: ['Puppeteer', 'Git', 'Postman', 'LLM Integration', 'Agile'],
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nidhi Agarwal, home">
          NA<span>.</span>
        </a>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              Open to impactful opportunities
            </div>
            <p className="eyebrow">Hello, I&apos;m Nidhi Agarwal</p>
            <h1>
              I build digital products
              <span> that perform.</span>
            </h1>
            <p className="hero-intro">
              Senior Software Engineer with 7+ years of experience turning
              complex product ideas into fast, scalable and thoughtfully
              crafted web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="button button-secondary" href="mailto:dnidhi.agarwal@gmail.com">
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Bengaluru, India</span>
              <span><BriefcaseBusiness size={16} /> Tracxn Technologies</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="portrait-card">
              <div className="portrait-grid" />
              <div className="initials">NA</div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="floating-code code-one">&lt;React /&gt;</div>
              <div className="floating-code code-two">Node.js</div>
            </div>
            <div className="experience-stamp">
              <strong>7+</strong>
              <span>Years of<br />experience</span>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <p className="section-number">01 / About</p>
            <h2>Engineering with clarity, curiosity and care.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I&apos;m a product-minded engineer who enjoys solving the hard
              problems behind simple, intuitive experiences.
            </p>
            <p>
              My work spans responsive interfaces, robust REST APIs, real-time
              systems, performance architecture and AI-assisted products. I
              care as much about clean collaboration and maintainable code as
              I do about what reaches the user.
            </p>
            <a className="text-link" href="mailto:dnidhi.agarwal@gmail.com">
              More about how I work <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-number">02 / Experience</p>
              <h2>Growing products, systems and teams.</h2>
            </div>
            <div className="company-row">
              <div>
                <p className="company-label">Company</p>
                <h3>Tracxn Technologies Limited</h3>
              </div>
              <p className="company-tenure">2019 — Present</p>
            </div>
            <div className="timeline">
              {roles.map((role) => (
                <article className="role" key={role.title}>
                  <div className="timeline-marker" />
                  <div className="role-meta">
                    <h3>{role.title}</h3>
                    <p>{role.period}</p>
                  </div>
                  <div className="role-detail">
                    <p className="role-summary">{role.summary}</p>
                    <ul>
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading heading-row">
            <div>
              <p className="section-number">03 / Selected work</p>
              <h2>Systems designed for real-world impact.</h2>
            </div>
            <p className="heading-note">
              A selection of high-impact work delivered at Tracxn.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <Icon size={23} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-impact">{project.impact}</div>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap skills-layout">
            <div className="section-heading">
              <p className="section-number">04 / Capabilities</p>
              <h2>My everyday toolkit.</h2>
            </div>
            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.label}>
                  <p>{group.label}</p>
                  <div>
                    {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-wrap">
          <div className="section-heading">
            <p className="section-number">05 / Education</p>
            <h2>Where it started.</h2>
          </div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={25} /></div>
            <div>
              <p>2014 — 2018</p>
              <h3>B.E. Computer Science &amp; Engineering</h3>
              <span>Assam Engineering College, Guwahati</span>
            </div>
            <strong>72.1%</strong>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="section-wrap contact-inner">
            <p className="section-number">06 / Let&apos;s connect</p>
            <h2>Have an opportunity in mind?</h2>
            <p>
              I&apos;m always open to discussing ambitious products, engineering
              challenges and teams that care about quality.
            </p>
            <a className="contact-email" href="mailto:dnidhi.agarwal@gmail.com">
              <Mail size={22} /> dnidhi.agarwal@gmail.com <ArrowUpRight size={20} />
            </a>
            <div className="contact-links">
              <a href="tel:+918638721867"><Phone size={16} /> +91 86387 21867</a>
              <a href="/Nidhi_Agarwal_Resume.pdf" download>
                <Download size={16} /> Download résumé
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">NA<span>.</span></a>
          <p>Designed &amp; built with care by Nidhi Agarwal © 2026</p>
          <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
