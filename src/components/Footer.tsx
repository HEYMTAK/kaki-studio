"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-[#1C1917]" ref={ref}>
      {/* CTA */}
      <div className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4683E]/20 text-[#E8956E] text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8956E]" />
                Passons à l&apos;action
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              Prêt(e) à remplir votre agenda ?
            </h2>
            <p className="text-[#9AA0A6] leading-relaxed text-lg mb-10 max-w-lg mx-auto font-medium">
              En moins d&apos;une semaine, une maquette personnalisée atterrit dans
              votre boîte mail —{" "}
              <span className="font-bold text-[#C4B8AF]">sans aucun engagement</span>.
            </p>
            <a
              href="mailto:contact@kakistudio.fr?subject=Demande de maquette - Kaki Studio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4683E] text-white font-bold rounded-full hover:bg-[#A84E2A] transition-colors text-base shadow-[0_4px_20px_rgba(212,104,62,0.35)]"
            >
              Demander ma maquette
              <span className="bg-white/20 text-xs font-bold px-2.5 py-1 rounded-full leading-none">
                50€ remboursés
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Sources + bottom bar */}
      <div className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3A3330] text-xs font-bold uppercase tracking-widest mb-4">
            Sources & Références
          </p>
          <ul className="text-[#3A3330] text-xs space-y-1.5 leading-relaxed mb-10">
            {[
              "Le réflexe de vérification (80 %) : France Num / Fevad",
              "La perte de clics Maps (70 %) : Partoo · Google France",
              "Le jugement visuel (75 %) : Stanford Persuasive Technology Lab",
              "La fuite chez le concurrent (52 %) : GetApp / Capterra",
              "Le Top 3 Local Pack (126 %) & Photos (1065 %) : BrightLocal",
              "L'augmentation du panier moyen (+25 %) : LS Institut · Fideneo",
            ].map((s, i) => (
              <li key={i}>· {s}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-lg font-black text-[#5C5450]">
              Kaki Studio
            </span>
            <p className="text-[#2C2521] text-xs font-medium">
              © {new Date().getFullYear()} Kaki Studio · Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
