"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Calendar, TrendingDown } from "lucide-react";

const mockups = [
  { label: "Massage", tag: "Soins · Bien-être", color: "#FFE8DC" },
  { label: "Institut", tag: "Beauté · Esthétique", color: "#E3F1EB" },
  { label: "Spa", tag: "Luxe · Relaxation", color: "#EDE8F5" },
];

export default function SectionPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-white" ref={ref}>
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
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] tracking-tight leading-tight mb-5">
            Un <span className="text-[#D4683E]">standing professionnel</span>{" "}
            instantané, à votre image.
          </h2>
          <p className="text-[#57534E] max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            L&apos;esthétique est au cœur de votre métier — votre site doit en être
            le reflet. Direction artistique 100 % sur-mesure,{" "}
            <span className="font-bold text-[#1C1917]">pensé mobile d&apos;abord</span>.
          </p>
        </motion.div>

        {/* Mockup grid — Google Image Search aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {mockups.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative aspect-[3/4] bg-[#F5F0EB] rounded-2xl overflow-hidden border border-[#EDE5DB] cursor-pointer"
            >
              {/* Tag chip — top left */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                  style={{ background: m.color, color: "#1C1917" }}
                >
                  {m.tag}
                </span>
              </div>

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: m.color }}
                >
                  <span className="text-3xl">🌿</span>
                </div>
                <p className="text-[#57534E] text-sm font-semibold">
                  {m.label}
                </p>
                <p className="text-[#9AA0A6] text-xs mt-1">
                  Bientôt disponible
                </p>
              </div>

              {/* Hover overlay — Google-style "open" button */}
              <div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="bg-white text-[#1C1917] text-sm font-bold px-5 py-2.5 rounded-full">
                  Voir le site →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Planity integration — feature card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#F5F0EB] rounded-2xl border border-[#EDE5DB] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — copy */}
            <div className="p-10 md:p-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8DC] text-[#D4683E] text-xs font-bold">
                  Intégration Planity
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#1C1917] leading-tight mb-4">
                Le duo parfait pour votre{" "}
                <span className="text-[#D4683E]">rentabilité</span>.
              </h3>
              <p className="text-[#57534E] leading-relaxed font-medium mb-6">
                Le client est séduit par vos photos. En un clic, il est redirigé
                de manière{" "}
                <span className="font-bold text-[#1C1917]">fluide</span> vers
                votre agenda{" "}
                <span className="font-bold text-[#1C1917]">Planity</span>. Le
                site séduit, Planity encaisse.
              </p>
              <a
                href="#offer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D4683E] hover:gap-3 transition-all"
              >
                Démarrer mon projet →
              </a>
            </div>

            {/* Right — metric */}
            <div className="p-10 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#EDE5DB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFE8DC] flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-[#D4683E]" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#E3F1EB] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#2E7D5A]" />
                </div>
              </div>
              <p className="text-5xl font-black text-[#D4683E] leading-none mb-2">
                −75 %
              </p>
              <p className="text-sm font-bold text-[#1C1917] mb-1">
                de rendez-vous non honorés
              </p>
              <p className="text-sm text-[#9AA0A6] font-medium">
                Grâce à la réservation en ligne fluide et aux rappels
                automatiques Planity.{" "}
                <span className="text-[#9AA0A6]">(Source : Planity Pro)</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
