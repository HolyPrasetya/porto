"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Org = {
  title: string;
  description: string;
  skills: string[];
  image: string;
};

const organizations: Org[] = [
  {
    title: "BINUS Taekwondo",
    description:
      "As founder and coach of BINUS Taekwondo, I established the organization from zero and developed its members through training, competitions, and teamwork.",
    skills: ["Leadership", "Time Management", "Decision-Making", "Coaching and Mentoring"],
    image: "/images/organization/binus-taekwondo.jpg",
  },
  {
    title: "BINUS Basketball @Semarang",
    description:
      "Served as Relation and Finance staff, managing financial programs and membership affairs.",
    skills: ["Financial Management", "Adaptability", "Responsibility", "Communication"],
    image: "/images/organization/binus-basketball.jpg",
  },
  {
    title: "TVKOM Regina Pacis",
    description:
      "Took on dual roles as videographer and editor from 2021–2023, capturing video footage and shaping it into engaging content through editing.",
    skills: ["Video Editing", "Creativity", "Attention to Detail", "Collaboration"],
    image: "/images/organization/tvkom.jpg",
  },
  {
    title: "Head Heart Hope Taekwondo",
    description:
      "Part of my life since childhood — my father founded this dojang in 2010, and I've practiced since age five. Today I continue as an assistant coach, training and mentoring the next generation of athletes.",
    skills: ["Discipline", "Confidence", "Perseverance", "Striving for Excellence"],
    image: "/images/organization/head-heart-hope.png",
  },
];

export default function Organization() {
  return (
    <section id="organization" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          Organization Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
          Beyond the code
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <motion.div
              key={org.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={org.image}
                  alt={org.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{org.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {org.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {org.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
