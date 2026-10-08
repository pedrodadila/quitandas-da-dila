import type { Metadata, Viewport } from "next";
import "@fontsource/great-vibes/400.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";
import { ENDERECO, INSTAGRAM_URL, SITE_URL, TELEFONE_E164 } from "@/lib/contato";

const titulo = "Quitandas da Dila | Pão de Queijo e Biscoito de Queijo em Pompéu – MG";
const descricao =
  "Pão de queijo e biscoito de queijo artesanais em Pompéu (MG): congelados para pronta entrega todos os dias ou assados por encomenda. Bolos caseiros, tarecos e pudim. Encomende: (37) 99826-2611.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Quitandas da Dila",
    title: "Quitandas da Dila — Da cozinha da Dila para sua família.",
    description: descricao,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF1E6",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Quitandas da Dila",
  slogan: "Da cozinha da Dila para sua família.",
  description: descricao,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/img/logo-480.webp`,
  telephone: TELEFONE_E164,
  servesCuisine: "Mineira",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Professora Pequenina, 361 – Bairro Cristos",
    addressLocality: "Pompéu",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Pompéu" },
  sameAs: [INSTAGRAM_URL],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cardápio",
    itemListElement: [
      "Pão de Queijo",
      "Biscoito de Queijo",
      "Bolo de Fubá",
      "Bolo de Fubá Cremoso",
      "Bolo de Trigo",
      "Bolo de Trigo com Queijo",
      "Tarecos",
      "Pudim de Leite Condensado",
    ].map((nome) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: nome } })),
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
