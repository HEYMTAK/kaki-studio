"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Vous m'envoyez un email",
    text: "On échange 10 minutes sur votre salon, vos photos, vos soins phares.",
  },
  {
    n: "02",
    title: "Maquette en 5 jours",
    text: "Je conçois la page d'accueil de votre futur site, livrée pour 50€.",
  },
  {
    n: "03",
    title: "Coup de cœur ou remboursé",
    text: "Si vous validez, les 50€ sont déduits du devis final. Zéro risque.",
  },
];

const included = [
  "Design 100 % sur-mesure",
  "Pensé mobile d'abord",
  "Intégration Planity / Treatwell",
  "SEO local optimisé",
  "Livré en moins d'une semaine",
  "Support inclus",
];

export default function SectionOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="offer"
      className="py-24 md:py-32 px-6 bg-[#F5F0EB] relative overflow-hidden"
      ref={ref}
    >
      {/* Warm blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(212,104,62,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
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
              L&apos;Offre
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1917] tracking-tight leading-tight mb-5">
            Jugez sur pièce avant de vous{" "}
            <span className="text-[#D4683E]">engager</span>.
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto leading-relaxed text-lg font-medium">
            Difficile de se projeter sans voir. Je conçois d&apos;abord la maquette —
            vous décidez ensuite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#EDE5DB] shadow-sm p-8 md:p-10"
          >
            <h3 className="font-black text-xl text-[#1C1917] mb-8">
              Comment ça marche
            </h3>
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFE8DC] flex items-center justify-center">
                    <span className="text-xs font-black text-[#D4683E]">
                      {step.n}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-[#1C1917] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#57534E] font-medium leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Pricing + included */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1C1917] rounded-2xl shadow-sm p-8 md:p-10 flex flex-col"
          >
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <p className="text-[#9AA0A6] text-sm font-semibold mb-2">
                Maquette sur-mesure
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">50€</span>
                <span className="text-[#9AA0A6] font-medium">
                  déduits si vous validez
                </span>
              </div>
              <p className="text-[#57534E] text-sm mt-2 font-medium">
                Site complet dès{" "}
                <span className="text-[#9AA0A6] font-bold">350€</span>
              </p>
            </div>

            {/* Included */}
            <div className="flex-1 mb-8">
              <p className="text-[#9AA0A6] text-xs font-bold uppercase tracking-wider mb-4">
                Inclus dans chaque projet
              </p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4683E]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#D4683E]" />
                    </div>
                    <span className="text-sm text-[#C4B8AF] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="mailto:contact@kakistudio.fr?subject=Demande de maquette - Kaki Studio"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4683E] text-white font-bold rounded-full shadow-[0_4px_20px_rgba(212,104,62,0.4)] hover:bg-[#A84E2A] transition-all duration-200 text-base"
            >
              Lancer ma maquette
              <span className="bg-white/20 text-xs font-bold px-2.5 py-1 rounded-full leading-none">
                50€ remboursés
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
