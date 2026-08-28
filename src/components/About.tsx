"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const softSkills = [
  "Organization",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Coaching",
  "Creativity",
  "Communication",
  "Discipline",
  "Adaptability",
];

const hardSkills = [
  "Programming (C, Python, MySQL)",
  "Android Development (Flutter, Android Studio)",
  "Web Development (HTML5, CSS)",
  "Game Dev (Unity, C#)",
  "Machine Learning & Computer Vision (OpenCV, CNN)",
  "Design (Figma, Photoshop, Premiere Pro)",
];

const tools = [
  { name: "Flutter", logo: "/images/tools/flutter.png" },
  { name: "Android Studio", logo: "/images/tools/android-studio.png" },
  { name: "React", logo: "/images/tools/react.png" },
  { name: "Python", logo: "/images/tools/python.png" },
  { name: "Figma", logo: "/images/tools/figma.png" },
  { name: "HTML5", logo: "/images/tools/html5.png" },
  { name: "CSS3", logo: "/images/tools/css3.png" },
  { name: "JavaScript", logo: "/images/tools/javascript.png" },
  { name: "MySQL", logo: "/images/tools/mysql.png" },
  { name: "C", logo: "/images/tools/c-lang.png" },
  { name: "Unity", logo: "/images/tools/unity.png" },
  { name: "SwiftUI", logo: "/images/tools/swiftUI.png" },
  { name: "Xcode", logo: "/images/tools/Xcode.png" },
  { name: "Sketch", logo: "/images/tools/sketch.webp" },
];

const stats = [
  { value: "5+", label: "Projects completed" },
  { value: "30+", label: "TaeKwonDo competitions" },
  { value: "3", label: "Academic competitions" },
  { value: "1", label: "Paper publication" },
];

const education = [
  { school: "SMP PL Bintang Laut Surakarta", logo: "/images/education/smp-bintang-laut.png" },
  { school: "SMA Regina Pacis Surakarta", logo: "/images/education/sma-regina-pacis.png" },
  { school: "BINUS University @Semarang", logo: "/images/education/binus.png" },
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-[1fr_minmax(0,260px)] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Hi, I&apos;m Ignasius Holy Prasetya.
            </h2>
            <p className="mt-6 max-w-2xl text-muted text-lg leading-relaxed">
              People usually call me Holy. I&apos;m a 20-year-old Computer
              Science undergraduate at Bina Nusantara University with a deep
              passion for technology, innovation, and continuous growth. I
              thrive in dynamic and collaborative environments, always eager
              to contribute, learn, and adapt.
            </p>
            <p className="mt-4 max-w-2xl text-muted text-lg leading-relaxed">
              With a strong foundation in software development and a
              proactive mindset, I enjoy working on meaningful projects that
              combine creativity and problem-solving. I actively engage in
              organizational activities, valuing teamwork and communication
              as key drivers of success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[260px] mx-auto md:mx-0"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/profile.jpg"
                alt="Ignasius Holy Prasetya"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex justify-center md:justify-start gap-3">
              <a
                href="https://www.instagram.com/holyprasetya_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-foreground hover:border-accent/50 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ignasius-holy-prasetya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-foreground hover:border-accent/50 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.35v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9.4V8.75Z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-y border-white/10 py-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <div className="mt-16 grid sm:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold uppercase tracking-wide text-sm mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="font-bold uppercase tracking-wide text-sm mb-4">
              Hard Skills
            </h3>
            <ul className="space-y-2 text-muted">
              {hardSkills.map((skill) => (
                <li key={skill} className="flex gap-2">
                  <span className="text-accent">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="font-bold uppercase tracking-wide text-sm mb-4">
            Tools &amp; Software
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                title={tool.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium"
              >
                <span className="relative h-5 w-5 shrink-0">
                  <Image
                    src={tool.logo}
                    alt=""
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </span>
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="font-bold uppercase tracking-wide text-sm mb-4">
            Education Journey
          </h3>
          <ol className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {education.map((step) => (
              <li
                key={step.school}
                className="flex items-center gap-3 text-muted"
              >
                <span className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden bg-white/90 ring-1 ring-white/10">
                  <Image
                    src={step.logo}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain p-1"
                  />
                </span>
                {step.school}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
