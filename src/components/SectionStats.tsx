"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const stats = [
  {
    end: 80,
    suffix: "%",
    label: "Réflexe de vérification",
    sub: "des Français consultent un site web avant de se rendre dans un commerce local.",
    source: "France Num / Fevad",
    color: "#D4683E",
    bg: "#FFE8DC",
  },
  {
    end: 75,
    suffix: "%",
    label: "Confiance par le design",
    sub: "des internautes jugent la crédibilité d'un établissement uniquement sur le design de son site.",
    source: "Stanford",
    color: "#2E7D5A",
    bg: "#E3F1EB",
  },
  {
    end: 25,
    prefix: "+",
    suffix: "%",
    label: "Panier moyen augmenté",
    sub: "L'expérience visuelle justifie vos tarifs et génère des achats de prestations complémentaires.",
    source: "LS Institut / Fideneo",
    color: "#7C3AED",
    bg: "#EDE8F5",
  },
  {
    end: 1065,
    suffix: "%",
    label: "Impact SEO photos",
    sub: "de clics supplémentaires vers la réservation pour les fiches Google liées à un site riche en photos.",
    source: "BrightLocal",
    color: "#1565C0",
    bg: "#E3EEFF",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const delay = index * 150;
    const duration = 1800;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.end));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timer);
  }, [isInView, stat.end, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-[#EDE5DB] shadow-sm p-8 flex flex-col"
    >
      {/* Color bar top */}
      <div
        className="w-full h-1 rounded-full mb-6"
        style={{ background: stat.bg }}
      />

      {/* Number */}
      <div className="mb-4">
        <span
          className="text-5xl md:text-6xl font-black leading-none"
          style={{ color: stat.color }}
        >
          {stat.prefix}
          {count}
          {stat.suffix}
        </span>
      </div>

      <h3 className="font-bold text-base text-[#1C1917] mb-2">{stat.label}</h3>
      <p className="text-[#9AA0A6] text-sm leading-relaxed flex-1">{stat.sub}</p>
      <span
        className="mt-5 self-start text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider"
        style={{ background: stat.bg, color: stat.color }}
      >
        {stat.source}
      </span>
    </motion.div>
  );
}

export default function SectionStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8DC] text-[#D4683E] text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4683E]" />
              Chiffres prouvés
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] tracking-tight leading-tight">
            La machine à{" "}
            <span className="text-[#D4683E]">rendez-vous</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
