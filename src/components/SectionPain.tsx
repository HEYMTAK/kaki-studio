"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cards = [
  {
    stat: "7×",
    statLabel: "moins d'interactions",
    title: "Le Mur Digital",
    text: "Sur Google Maps, une fiche sans site web génère 7 fois moins de clics et d'appels que celles qui en possèdent un.",
    source: "Partoo / Google France",
  },
  {
    stat: "52 %",
    statLabel: "ferment la page",
    title: "La Fuite Visuelle",
    text: "52 % des consommateurs quittent immédiatement un site qui ne les rassure pas visuellement — et vont directement chez le concurrent.",
    source: "Arobaz",
  },
  {
    stat: "86 %",
    statLabel: "jugent sur les photos",
    title: "L'Exigence Beauté",
    text: "Dans l'esthétique, 86 % des clientes jugent le sérieux d'un institut sur ses photos d'ambiance avant même de lire les tarifs.",
    source: "Devmiweb",
  },
];

export default function SectionPain() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F5F0EB]" ref={ref}>
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
              La réalité du terrain
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] tracking-tight leading-tight mb-5">
            Google Maps attire les curieux.
            <br />
            Votre site web{" "}
            <span className="text-[#D4683E]">crée la confiance</span>.
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto leading-relaxed text-lg font-medium">
            Une fiche Google Maps, c&apos;est l&apos;adresse de votre salon. Un site web,
            c&apos;est son{" "}
            <span className="font-bold text-[#1C1917]">âme</span>. La
            différence se mesure en réservations perdues chaque mois.
          </p>
        </motion.div>

        {/* Cards — bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 border border-[#EDE5DB] shadow-sm flex flex-col"
            >
              {/* Big stat — Analytics style */}
              <div className="mb-5">
                <span className="text-5xl font-black text-[#D4683E] leading-none block">
                  {card.stat}
                </span>
                <span className="text-xs font-semibold text-[#9AA0A6] mt-1 block uppercase tracking-wider">
                  {card.statLabel}
                </span>
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#EDE5DB] mb-5" />

              <h3 className="font-bold text-lg text-[#1C1917] mb-3">
                {card.title}
              </h3>
              <p className="text-[#57534E] leading-relaxed text-sm flex-1">
                {card.text}
              </p>

              {/* Source chip */}
              <span className="mt-5 self-start text-[10px] bg-[#F5F0EB] text-[#9AA0A6] px-3 py-1 rounded-full font-medium">
                Source : {card.source}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-[#9AA0A6] font-medium mt-10"
        >
          Se contenter d&apos;un lien Planity ou Treatwell, c&apos;est comme tendre une
          liste de prix froide à un client qui cherche{" "}
          <span className="text-[#57534E] font-semibold">un moment de douceur</span>.
        </motion.p>
      </div>
    </section>
  );
}
