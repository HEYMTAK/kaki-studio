import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kaki Studio — Sites Web pour Salons de Massage & Instituts de Beauté",
  description:
    "Transformez les visiteurs de Google Maps en réservations. Sites web sur-mesure pour salons de massage, instituts de beauté et spas. Maquette dès 50€ remboursés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dm.variable} ${dmSerif.variable}`}>
      <body className="bg-white text-[#1C1917] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
