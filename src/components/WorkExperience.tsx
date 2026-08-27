"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  role: string;
  description: string;
  image: string;
  imagePosition?: string;
};

const projects: Project[] = [
  {
    title: "Huni — 2D/3D Home Survey",
    role: "iOS Developer & Product Manager",
    description:
      "A home survey and visualization app using RoomPlan (AR) to scan and map rooms. Published on the App Store as my first production iOS application.",
    image: "/images/work/HuniAppStore.png",
  },
  {
    title: "STROOM",
    role: "Tech Lead",
    description:
      "An AR-based educational app that teaches kids basic electricity through an interactive car-repair experience. Led the technical direction and architecture (SwiftUI, ARKit, RealityKit, hybrid MVVM + ECS) — building core AR interactions, circuit building/validation, real-time lighting simulation, and persistent learning progress.",
    image: "/images/work/STROOM.jpg",
  },
  {
    title: "Soulace",
    role: "Tech Lead",
    description:
      "A social yoga app connecting people through video calls, group management, and real-time interaction. Implemented modern iOS practices including MVVM architecture with Agora and Firebase integration.",
    image: "/images/work/Soulace.png",
  },
  {
    title: "Soulace — Alternate Version",
    role: "UI/UX Designer",
    description:
      "A mindful yoga and stretching app that helps users relieve body tension through guided sessions. Designed the complete user flow, from body-tension mapping to session playback and completion feedback.",
    image: "/images/work/SoulaceAltVer.png",
    imagePosition: "object-top",
  },
  {
    title: "Sync or Sink",
    role: "Individual Project",
    description:
      "A multiplayer interactive game focused on collaboration and real-time gameplay experience between two players.",
    image: "/images/work/SyncOrSink.png",
    imagePosition: "object-top",
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          Work Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Apple Developer Academy @ BINUS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-muted"
        >
          Tangerang
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-3xl text-muted text-lg leading-relaxed"
        >
          Developed 5 iOS application projects using SwiftUI and Apple
          development frameworks, working in an Apple-style agile environment
          — daily stand-ups, weekly sprints, prototyping, testing, and
          presentations.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              <div className="relative aspect-video bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${project.imagePosition ?? ""}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-accent mt-1">{project.role}</p>
                <p className="mt-3 text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
