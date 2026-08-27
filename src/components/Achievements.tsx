"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Achievement = {
  title: string;
  description: string;
  meta: string;
  image: string;
};

const achievements: Achievement[] = [
  {
    title: "Adaro Foundation Scholarship",
    description:
      "Selected as an Adaro Foundation Awardee, receiving recognition and support for academic achievements and active involvement in student development.",
    meta: "Agustus 2025 – Juli 2026",
    image: "/images/achievements/adaro.png",
  },
  {
    title: "Widia Scholarship",
    description:
      "Awarded the Widia Partial Scholarship in the 2023–2024 academic year — my first scholarship at BINUS, motivating me to keep striving for higher achievements.",
    meta: "Semester 1 – Semester 3",
    image: "/images/achievements/widia.jpeg",
  },
  {
    title: "BINUS Appreciation Day",
    description:
      "Invited to BINUS Appreciation Day to receive recognition for my achievements and contributions as a student.",
    meta: "Certificate of Appreciation",
    image: "/images/achievements/binus-appreciation-day.jpg",
  },
  {
    title: "POMPROV Taekwondo 2024",
    description:
      "Competed in the Pekan Olahraga Mahasiswa Provinsi (POMPROV) for Taekwondo, representing BINUS University Semarang — tested my skills in a competitive arena and strengthened my discipline and resilience.",
    meta: "Runner-Up",
    image: "/images/achievements/pomprov.jpg",
  },
  {
    title: "idFest 2025: Developer Day Finalist",
    description:
      "Selected as a finalist at idFest: Developer Day Road to APICTA with my team, presenting Aqualyze — a real-time IoT-based water quality monitoring system for Recirculating Aquaculture Systems.",
    meta: "4th place",
    image: "/images/achievements/idfest2025.jpg",
  },
  {
    title: "15 Years Journey of Taekwondo",
    description:
      "Practicing Taekwondo for over 15 years since early childhood — shaping me as an athlete, mentor, and coach assistant, instilling discipline, perseverance, and leadership.",
    meta: "± 30 competitions · 14 Gold, 12 Silver, 3 Bronze",
    image: "/images/achievements/15-years-taekwondo.jpg",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
          Milestones
        </motion.h2>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="grid sm:grid-cols-[3rem_1fr_9rem] gap-x-6 gap-y-4 py-6 items-center"
            >
              <span className="text-muted text-sm sm:self-start sm:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-sm text-accent whitespace-nowrap">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-1 text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full sm:w-36 rounded-lg overflow-hidden border border-white/10 justify-self-start sm:justify-self-end">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
