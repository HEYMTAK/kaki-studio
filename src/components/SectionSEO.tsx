"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Trophy, Target, Smartphone } from "lucide-react";

const points = [
  {
    Icon: Trophy,
    tag: "Local Pack",
    color: "#FFE8DC",
    iconColor: "#D4683E",
    title: "Dominez le Top 3",
    stat: "+126 %",
    statLabel: "d'appels générés",
    text: "Les 3 premiers résultats Google Maps captent 42 % des clics. Un site optimisé par soin est le moteur n°1 pour rejoindre ce podium.",
    source: "BrightLocal",
  },
  {
    Icon: Target,
    tag: "Longue Traîne",
    color: "#E3F1EB",
    iconColor: "#2E7D5A",
    title: "Captez les recherches précises",
    stat: "×2,5",
    statLabel: "taux de conversion",
    text: "«massage californien femme enceinte Bordeaux» — ces recherches hyper-ciblées convertissent 2,5× mieux car l'intention d'achat est immédiate.",
    source: "Ahrefs",
  },
  {
    Icon: Smartphone,
    tag: "Mobile-First",
    color: "#EDE8F5",
    iconColor: "#7C3AED",
    title: "Réservation en 3 clics",
    stat: "76 %",
    statLabel: "des recherches locales",
    text: "76 % des recherches «salon à proximité» sur smartphone aboutissent à une visite dans la journée. Votre site est pensé 100 % mobile.",
    source: "Think With Google",
  },
];

export default function SectionSEO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F5F0EB]" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
              SEO Local
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] tracking-tight leading-tight mb-5">
            Ne laissez plus vos concurrents{" "}
            <span className="text-[#D4683E]">monopoliser Google</span>.
          </h2>
          <p className="text-[#57534E] max-w-lg mx-auto leading-relaxed text-lg font-medium">
            Un beau site, c&apos;est bien.{" "}
            <span className="font-bold text-[#1C1917]">Être trouvé</span>,
            c&apos;est mieux. Notre structure est conçue pour aspirer la clientèle
            locale prête à réserver.
          </p>
        </motion.div>

        {/* Points — horizontal cards with left accent */}
        <div className="flex flex-col gap-4">
          {points.map((point, i) => {
            const { Icon } = point;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-white rounded-2xl border border-[#EDE5DB] shadow-sm overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Metric sidebar */}
                  <div
                    className="sm:w-44 flex-shrink-0 p-6 flex flex-col justify-center"
                    style={{ background: point.color }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(255,255,255,0.6)" }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: point.iconColor }}
                      />
                    </div>
                    <p
                      className="text-3xl font-black leading-none mb-1"
                      style={{ color: point.iconColor }}
                    >
                      {point.stat}
                    </p>
                    <p className="text-xs font-semibold text-[#57534E] uppercase tracking-wider leading-tight">
                      {point.statLabel}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: point.color,
                          color: point.iconColor,
                        }}
                      >
                        {point.tag}
                      </span>
                    </div>
                    <h3 className="font-black text-xl text-[#1C1917] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[#57534E] leading-relaxed text-sm font-medium">
                      {point.text}{" "}
                      <span className="text-[#9AA0A6]">
                        (Source : {point.source})
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
