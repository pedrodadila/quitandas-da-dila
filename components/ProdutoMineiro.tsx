"use client";

import { useState } from "react";
import { Icone } from "./Icone";
import { whatsapp } from "@/lib/contato";

type Modo = "assado" | "congelado";

type Props = {
  nome: string;
  descricao: string;
  fotos: Record<Modo, { base: string; alt: string }>;
};

export function ProdutoMineiro({ nome, descricao, fotos }: Props) {
  const [modo, setModo] = useState<Modo>("assado");
  const foto = fotos[modo];

  return (
    <article className="qd-cartao produto">
      <div className="qd-cartao__foto">
        {(["assado", "congelado"] as Modo[]).map((m) => (
          <img
            key={m}
            src={`${fotos[m].base}-480.webp`}
            srcSet={`${fotos[m].base}-480.webp 480w, ${fotos[m].base}-900.webp 900w`}
            sizes="(min-width: 760px) 520px, 100vw"
            width={480}
            height={640}
            alt={fotos[m].alt}
            loading="lazy"
            decoding="async"
            className={m === modo ? "ativa" : undefined}
            aria-hidden={m !== modo}
          />
        ))}
        {modo === "congelado" ? (
          <span className="qd-selo qd-selo--pilula qd-selo--cafe">
            <Icone nome="congelado" tamanho={16} />
            Pronta entrega
          </span>
        ) : (
          <span className="qd-selo qd-selo--pilula qd-selo--terracota">
            <Icone nome="forno" tamanho={16} />
            Assado por encomenda
          </span>
        )}
      </div>

      <div className="qd-cartao__corpo">
        <h3 className="qd-cartao__nome">{nome}</h3>

        <div className="alternar" role="group" aria-label={`Ver ${nome} assado ou congelado`}>
          <button type="button" aria-pressed={modo === "assado"} onClick={() => setModo("assado")}>
            <Icone nome="forno" tamanho={18} /> Assado
          </button>
          <button type="button" aria-pressed={modo === "congelado"} onClick={() => setModo("congelado")}>
            <Icone nome="congelado" tamanho={18} /> Congelado
          </button>
        </div>

        <p className="qd-cartao__descricao">{descricao}</p>

        <ul className="qd-cartao__disp">
          <li>
            <Icone nome="congelado" tamanho={18} />
            <span>Congelado: pronto para forno ou Air Fryer</span>
          </li>
          <li>
            <Icone nome="forno" tamanho={18} />
            <span>Assado: é só marcar o horário</span>
          </li>
        </ul>

        <p className="qd-cartao__detalhe">Bandeja com 20 unidades · aprox. 1 kg</p>

        <a
          className="qd-botao qd-botao--secundario bloco"
          href={whatsapp(`Olá, Dila! Quero encomendar ${nome} ${modo}.`)}
          target="_blank"
          rel="noopener"
          aria-label={`Encomendar ${nome} pelo WhatsApp`}
        >
          <Icone nome="whatsapp" tamanho={20} />
          <span>Encomendar pelo WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
