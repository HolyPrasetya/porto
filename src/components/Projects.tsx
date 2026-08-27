"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  image: string;
  link?: { label: string; href: string };
  extra?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: "LeafSpark",
    year: "2024",
    role: "App Designer & Tester",
    description:
      "AI-powered plant disease detection app for farmers, using a CNN model to analyze leaf images in real-time. Built with Flutter and a Flask-based API. I designed the UI/UX in Figma and tested core flows like the leaf-scanning and navigation experience.",
    tags: ["Flutter", "Figma", "CNN", "Flask API"],
    image: "/images/projects/leafspark.png",
    link: {
      label: "GitHub",
      href: "https://github.com/HolyPrasetya/AOL-LeafSpark-Software-Engineering",
    },
  },
  {
    title: "Aqualyze",
    year: "2025",
    role: "App Designer & Tester",
    description:
      "IoT-based water quality monitor for Recirculating Aquaculture Systems (mangrove crab farming), tracking temperature, pH, dissolved oxygen, and turbidity in real-time via ATmega328P + ESP8266/MQTT, with a LINE bot for alerts.",
    tags: ["Flutter", "IoT", "Node.js", "MQTT"],
    image: "/images/projects/aqualyze.png",
    link: { label: "GitHub", href: "https://github.com/HolyPrasetya/Aqualyze" },
    extra: {
      label: "Paper accepted @ ICCSCI 2025",
      href: "/images/projects/aqualyze-paper.png",
    },
  },
  {
    title: "Crab's Last Haven",
    year: "2025",
    role: "Game Developer",
    description:
      "A 2D survival action-adventure game built in Unity — my first game dev project. Follows Finn, a crab farmer searching the forest for his missing crab, Crabby, through three levels with combat, stealth, and camouflage mechanics.",
    tags: ["Unity", "C#", "2D Game Design"],
    image: "/images/projects/crabs-last-haven.png",
    link: {
      label: "Play on itch.io",
      href: "https://holpras.itch.io/crabs-last-haven",
    },
  },
  {
    title: "DiamondCut Motors",
    year: "2024",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "A web-based car showroom platform with five sections — Home, Cars, Showroom, About, and Sign In. My first website built from scratch: designed in Figma, then developed with HTML, CSS, and JavaScript.",
    tags: ["HTML/CSS", "JavaScript", "Figma"],
    image: "/images/projects/diamondcut.png",
    link: {
      label: "GitHub",
      href: "https://github.com/HolyPrasetya/DiamondCut-Motors",
    },
  },
  {
    title: "UI/UX Design Showcase",
    year: "2024",
    role: "UI/UX Designer",
    description:
      "A compilation of interface design concepts made in Figma: ZenVita (health tracking), Eventy (event organizer), SpareCraft (auto repair booking), and ThriftFinds (secondhand shopping).",
    tags: ["Figma", "UI/UX"],
    image: "/images/projects/uiux-showcase.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          What I've Built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
           Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="shrink-0 text-sm text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-accent mt-1">{project.role}</p>
                <p className="mt-3 text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                    >
                      {project.link.label} →
                    </a>
                  )}
                  {project.extra && (
                    <a
                      href={project.extra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-foreground hover:underline"
                    >
                      {project.extra.label} →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
