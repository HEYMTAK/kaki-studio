"use client";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Sparkles, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    Icon: MapPin,
    bg: "#FFE8DC",
    color: "#D4683E",
    title: "Google Maps en priorité",
    text: "Visible au sommet des recherches locales",
  },
  {
    Icon: Sparkles,
    bg: "#E3F1EB",
    color: "#2E7D5A",
    title: "Design à votre image",
    text: "Chaleureux, rassurant, à la hauteur de vos soins",
  },
  {
    Icon: Smartphone,
    bg: "#EDE8F5",
    color: "#7C3AED",
    title: "Réservation mobile",
    text: "Un rendez-vous pris en 3 clics",
  },
  {
    Icon: TrendingUp,
    bg: "#E3EEFF",
    color: "#1565C0",
    title: "Résultats mesurables",
    text: "Plus de réservations dès la 1ʳᵉ semaine",
  },
];

const trustItems = [
  "Design 100 % sur-mesure",
  "Livré en moins de 5 jours",
  "Maquette à 50€ — remboursés si vous validez",
];

function GoogleSearchMockup() {
  return (
    <div className="w-full">
      {/* Search bar */}
      <div className="flex items-center gap-3 bg-white border border-[#DADCE0] rounded-full px-5 py-3.5 shadow-[0_1px_6px_rgba(32,33,36,0.2)]">
        <Search className="w-4 h-4 text-[#9AA0A6] flex-shrink-0" />
        <span className="text-[#1C1917] text-sm flex-1 text-left">
          massage bien-être près de moi
        </span>
        <div className="flex items-center gap-0.5 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#EA4335] block" />
          <span className="w-2 h-2 rounded-full bg-[#FBBC05] block" />
          <span className="w-2 h-2 rounded-full bg-[#34A853] block" />
          <span className="w-2 h-2 rounded-full bg-[#4285F4] block" />
        </div>
      </div>

      {/* Local Pack results */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-2.5 bg-white border border-[#E7E0DA] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.09)]"
      >
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <span className="text-[10px] text-[#9AA0A6] font-medium uppercase tracking-wider">
            Résultats locaux · Google Maps
          </span>
          <span className="text-[10px] text-[#4285F4] font-medium">
            Voir la carte
          </span>
        </div>

        {/* Result #1 — WITH website — highlighted */}
        <div className="relative px-4 py-3.5 bg-[#FFF8F5] border-l-[3px] border-[#D4683E]">
          <div className="absolute top-2 right-3">
            <span className="text-[10px] font-bold text-[#34A853] bg-[#E6F4EA] px-2 py-0.5 rounded-full">
              Ouvert
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FFE8DC] flex items-center justify-center mt-0.5">
              <Globe className="w-4 h-4 text-[#D4683E]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-[#1C1917]">Votre Salon ✦</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[#D4683E] text-xs leading-none">★★★★★</span>
                <span className="text-[11px] text-[#57534E]">4,9 · 127 avis</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[10px] bg-[#D4683E] text-white px-2.5 py-1 rounded-full font-bold">
                  Site web ✓
                </span>
                <span className="text-[10px] border border-[#D4683E] text-[#D4683E] px-2.5 py-1 rounded-full font-semibold">
                  Réserver →
                </span>
                <span className="text-[10px] border border-[#E7E0DA] text-[#9AA0A6] px-2.5 py-1 rounded-full">
                  Appeler
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Result #2 */}
        <div className="px-4 py-3 border-t border-[#F5EFE9] opacity-55">
          <p className="font-semibold text-sm text-[#57534E]">Institut Beauté Plus</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-yellow-400 text-xs">★★★★</span>
            <span className="text-[11px] text-[#9AA0A6]">4,1 · 34 avis</span>
          </div>
          <div className="flex gap-1.5 mt-1.5">
            <span className="text-[10px] bg-[#F5EFE9] text-[#9AA0A6] px-2.5 py-1 rounded-full">
              Aucun site web
            </span>
          </div>
        </div>

        {/* Result #3 */}
        <div className="px-4 py-3 border-t border-[#F5EFE9] opacity-30">
          <p className="font-semibold text-sm text-[#9AA0A6]">Spa du Quartier</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-yellow-300 text-xs">★★★</span>
            <span className="text-[11px] text-[#BEBEBE]">3,7 · 8 avis</span>
          </div>
          <span className="inline-block text-[10px] bg-[#F5EFE9] text-[#BEBEBE] px-2.5 py-1 rounded-full mt-1.5">
            Aucun site web
          </span>
        </div>

        <div className="px-4 py-2.5 border-t border-[#F5EFE9]">
          <span className="text-[11px] text-[#4285F4] font-medium">
            Voir plus de résultats →
          </span>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-3 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4683E] flex-shrink-0" />
        <p className="text-xs text-[#9AA0A6] font-medium">
          Seul le 1ᵉʳ résultat a un site web.{" "}
          <span className="text-[#D4683E] font-bold">Ça se voit.</span>
        </p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{
        background: [
          "radial-gradient(ellipse 90% 70% at -5% 45%, rgba(255,210,175,0.55) 0%, transparent 55%)",
          "radial-gradient(ellipse 60% 55% at 100% 5%, rgba(212,104,62,0.13) 0%, transparent 50%)",
          "radial-gradient(ellipse 50% 60% at 75% 100%, rgba(46,125,90,0.08) 0%, transparent 50%)",
          "radial-gradient(ellipse 40% 40% at 50% 0%, rgba(255,225,200,0.4) 0%, transparent 60%)",
          "radial-gradient(ellipse 35% 35% at 20% 100%, rgba(212,104,62,0.06) 0%, transparent 55%)",
          "#FEF7F0",
        ].join(", "),
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Decorative — concentric circle arcs, top-right */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-[rgba(212,104,62,0.1)] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-[280px] h-[280px] rounded-full border border-[rgba(212,104,62,0.07)] pointer-events-none" />

      {/* Decorative — dot grid, bottom-left */}
      <div
        className="absolute bottom-24 left-0 w-40 h-40 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,104,62,1) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Decorative — dot grid, top-left faint */}
      <div
        className="absolute top-20 left-8 w-24 h-24 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(46,125,90,1) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 h-16">
        <span className="text-xl font-black text-[#1C1917] tracking-tight">
          Kaki Studio
        </span>
        <div className="hidden md:flex items-center gap-1">
          <a
            href="#portfolio"
            className="text-sm font-medium text-[#57534E] px-4 py-2 rounded-full hover:bg-white/60 transition-colors"
          >
            Réalisations
          </a>
          <a
            href="#offer"
            className="text-sm font-medium text-[#57534E] px-4 py-2 rounded-full hover:bg-white/60 transition-colors"
          >
            L&apos;offre
          </a>
        </div>
        <a
          href="#offer"
          className="text-sm font-bold text-white bg-[#D4683E] px-5 py-2.5 rounded-full hover:bg-[#A84E2A] transition-colors shadow-sm"
        >
          Démarrer →
        </a>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex items-center px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

            {/* LEFT — Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Chip */}
              <div className="flex justify-center lg:justify-start mb-7">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8DC]/80 text-[#D4683E] text-xs font-bold tracking-wide border border-[#F5C4A8]/60 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4683E]" />
                  Agence Web · Massage & Bien-être
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] text-[#1C1917] leading-[1.12] tracking-normal mb-8">
                Devenez la{" "}
                <span className="text-[#D4683E] italic">première réponse</span>{" "}
                de Google pour votre salon.
              </h1>

              {/* 4 feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10 max-w-lg mx-auto lg:mx-0">
                {features.map(({ Icon, bg, color, title, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3 rounded-xl border border-white/70 px-4 py-3 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.55)" }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: bg }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#1C1917] leading-tight">
                        {title}
                      </p>
                      <p className="text-xs text-[#9AA0A6] font-medium mt-0.5 leading-snug">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#offer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#D4683E] text-white font-bold rounded-full shadow-[0_4px_24px_rgba(212,104,62,0.45)] hover:bg-[#A84E2A] hover:shadow-[0_6px_28px_rgba(212,104,62,0.5)] transition-all duration-200 text-base"
                >
                  Demander ma maquette
                  <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full leading-none">
                    50€ remboursés
                  </span>
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-1 px-7 py-4 text-[#D4683E] font-bold rounded-full hover:bg-white/60 transition-colors text-base"
                >
                  Voir les réalisations →
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Mockup in floating glassmorphism frame */}
            <motion.div
              initial={{ opacity: 0, x: 32, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="w-full max-w-sm lg:max-w-[390px] flex-shrink-0"
            >
              <div
                className="rounded-3xl p-6"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 8px 40px rgba(212,104,62,0.1), 0 1px 0 rgba(255,255,255,0.9) inset",
                }}
              >
                <GoogleSearchMockup />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 border-t border-white/50"
        style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs font-semibold text-[#57534E]">
              <span className="text-[#D4683E]">✦</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
