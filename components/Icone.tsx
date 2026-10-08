// Ícones do Design System (traço 1,75px, grade 24px, cor herdada).
const ICONES = {
  whatsapp:
    '<path d="M4 20l1.2-3.6A8 8 0 1 1 8 19.1z"/><path d="M9 8.6c0 3.3 3.1 6.4 6.4 6.4l1-1.6-2-1-1 .9c-1-.5-1.9-1.4-2.4-2.4l.9-1-1-2-1.6 1z"/>',
  instagram:
    '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".6" fill="currentColor"/>',
  telefone:
    '<path d="M6.5 3.5h2.6l1.4 4.2-2 1.4a10 10 0 0 0 6.4 6.4l1.4-2 4.2 1.4v2.6a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
  congelado:
    '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.5 4.5 12 6l2.5-1.5M9.5 19.5 12 18l2.5 1.5M4.6 10.6l2.5-.1.1-2.6M19.4 13.4l-2.5.1-.1 2.6M4.6 13.4l2.5.1.1 2.6M19.4 10.6l-2.5-.1-.1-2.6"/>',
  forno:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 8h17"/><circle cx="7" cy="5.8" r=".4" fill="currentColor"/><circle cx="10" cy="5.8" r=".4" fill="currentColor"/><rect x="6.5" y="10.5" width="11" height="7" rx="1.2"/><path d="M10 12.5c-.6.7.6 1.3 0 2M12 12.5c-.6.7.6 1.3 0 2M14 12.5c-.6.7.6 1.3 0 2"/>',
  "air-fryer":
    '<path d="M6 4h12a1.5 1.5 0 0 1 1.5 1.5V19a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V5.5A1.5 1.5 0 0 1 6 4z"/><path d="M4.5 12h15"/><path d="M9 15.5h6"/><circle cx="12" cy="8" r="2"/>',
  encomenda:
    '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/><path d="M12 17.4s-2.6-1.6-2.6-3.3a1.4 1.4 0 0 1 2.6-.8 1.4 1.4 0 0 1 2.6.8c0 1.7-2.6 3.3-2.6 3.3z"/>',
  retirada:
    '<path d="M5 8h14l-1.2 11a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>',
  local:
    '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  artesanal:
    '<path d="M6 13.5c0-3.6 2.7-6.5 6-6.5s6 2.9 6 6.5"/><path d="M4 13.5h16v1.5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M10.5 4.5c-.6.7.6 1.3 0 2M13.5 4.5c-.6.7.6 1.3 0 2"/>',
  "receita-mineira":
    '<path d="M6 20C9 15 12 10 18 4"/><path d="M9.6 15.4C7 15.6 5.4 14 5.4 11.6c2.4 0 4 1.4 4.2 3.8zM12.6 11.4c-2.6.2-4.2-1.4-4.2-3.8 2.4 0 4 1.4 4.2 3.8zM10.4 16.6c.2-2.6 1.8-4 4.2-4 0 2.4-1.6 3.8-4.2 4zM13.4 12.6c.2-2.6 1.8-4 4.2-4 0 2.4-1.6 3.8-4.2 4z"/>',
} as const;

export type NomeIcone = keyof typeof ICONES;

export function Icone({ nome, tamanho = 20, className }: { nome: NomeIcone; tamanho?: number; className?: string }) {
  return (
    <svg
      className={className ? `qd-icone ${className}` : "qd-icone"}
      viewBox="0 0 24 24"
      width={tamanho}
      height={tamanho}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONES[nome] }}
    />
  );
}

export function Coracao({ tamanho = 14 }: { tamanho?: number }) {
  return (
    <svg className="qd-coracao" viewBox="0 0 24 22" width={tamanho} height={(tamanho * 22) / 24} aria-hidden="true">
      <path d="M12 21.5S0 14.6 0 6.6A6.4 6.4 0 0 1 12 3.4a6.4 6.4 0 0 1 12 3.2c0 8-12 14.9-12 14.9z" />
    </svg>
  );
}

export function Arabesco({ largura = 200 }: { largura?: number }) {
  return (
    <svg className="qd-arabesco" viewBox="0 0 240 28" width={largura} height={(largura * 28) / 240} fill="none" aria-hidden="true">
      <path className="qd-arabesco__traco" d="M6 14h62c14 0 18-10 9-10s-8 10 5 10h16M234 14h-62c-14 0-18-10-9-10s8 10-5 10h-16" />
      <path className="qd-arabesco__cor" d="M120 23s-10-5.8-10-12.4A5.3 5.3 0 0 1 120 7.9a5.3 5.3 0 0 1 10 2.7c0 6.6-10 12.4-10 12.4z" />
    </svg>
  );
}

export function TituloSecao({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div className="qd-titulo-secao">
      <h2 className="qd-titulo-secao__aba" id={id}>
        <Icone nome="receita-mineira" tamanho={18} className="qd-ramo" />
        <span>{children}</span>
        <Icone nome="receita-mineira" tamanho={18} className="qd-ramo qd-ramo--espelho" />
      </h2>
    </div>
  );
}
