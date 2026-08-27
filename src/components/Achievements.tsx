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
    title: "POMPROV Taekwondo 2024",
    description:
      "Competed in the Pekan Olahraga Mahasiswa Provinsi (POMPROV) for Taekwondo, representing BINUS University Semarang — tested my skills in a competitive arena and strengthened my discipline and resilience.",
    meta: "Runner-Up",
    image: "/images/achievements/pomprov.jpg",
  },
  {
    title: "BINUS Appreciation Day 2024",
    description:
      "Invited to BINUS Appreciation Day to receive recognition for my achievements and contributions as a student.",
    meta: "Certificate of Appreciation",
    image: "/images/achievements/binus-appreciation-day.jpg",
  },
  {
    title: "BINUS Appreciation Day 2026",
    description:
      "Selected once again for BINUS Appreciation Day 2026 in recognition of my achievements and contributions. Truly grateful and blessed to receive this recognition for the second time.",
    meta: "Certificate of Appreciation",
    image: "/images/achievements/appreciationday2026.jpg",
  },
  {
    title: "idFest 2025: Developer Day Finalist",
    description:
      "Selected as a finalist at idFest: Developer Day Road to APICTA with my team, presenting Aqualyze — a real-time IoT-based water quality monitoring system for Recirculating Aquaculture Systems.",
    meta: "4th place",
    image: "/images/achievements/idfest2025.jpg",
  },
  {
    title: "APICTA Awards 2025 — International Finalist",
    description:
      "Selected as an international finalist to represent Indonesia at the APICTA Awards 2025 in Kaohsiung, Taiwan, where I presented Aqualyze to an international panel of judges. This experience challenged me to communicate our innovation beyond borders and compete alongside 200+ teams from across the Asia-Pacific region.",
    meta: "International Finalist — APICTA Awards 2025",
    // TODO: no photo/certificate provided yet for this one — drop a file in
    // public/images/achievements/ and point this at it.
    image: "/images/achievements/apicta-2025.jpg",
  },
  {
    title: "Aqualyze — Bronze Finalist",
    description:
      "Recognized as a Bronze Finalist at INOVATALK, a university innovation competition held as part of the Gelar Inovasi Harmoni Nusantara 2025 by Universitas Kristen Satya Wacana (UKSW).",
    meta: "Bronze Finalist — INOVATALK 2025",
    image: "/images/achievements/aqualyze-inovatalk-2025.png",
  },
  {
    title: "BAIM: CODE 6.0 2026 Finalist",
    description:
      "Selected as a Top 5 Finalist at Competition of Developer (CODE 6.0) Software Development by AMIKOM, developing BAIM — an application designed to support communication and learning for children with Autism Spectrum Disorder (ASD).",
    meta: "Top 5 Finalist",
    image: "/images/achievements/BAIM.jpg",
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
          Personal Milestones
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
          Achievements & Awards
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
