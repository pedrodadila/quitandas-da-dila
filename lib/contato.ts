// Fatos oficiais da marca (Design System Quitandas da Dila). Mude aqui e o site inteiro acompanha.
export const TELEFONE = "(37) 99826-2611";
export const TELEFONE_E164 = "+5537998262611";
export const INSTAGRAM = "@quitandasdadila";
export const INSTAGRAM_URL = "https://www.instagram.com/quitandasdadila/";
export const ENDERECO = "Rua Professora Pequenina, 361 – Bairro Cristos, Pompéu – MG";
export const MAPA_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Professora Pequenina, 361, Cristos, Pompéu - MG");

export const LIGAR_URL = `tel:${TELEFONE_E164}`;

export function whatsapp(mensagem = "Olá, Dila! Gostaria de fazer uma encomenda.") {
  return `https://wa.me/${TELEFONE_E164.replace("+", "")}?text=${encodeURIComponent(mensagem)}`;
}

export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
