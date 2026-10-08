import { Arabesco, Coracao, Icone, TituloSecao } from "@/components/Icone";
import { ProdutoMineiro } from "@/components/ProdutoMineiro";
import { ENDERECO, INSTAGRAM, INSTAGRAM_URL, LIGAR_URL, MAPA_URL, TELEFONE, whatsapp } from "@/lib/contato";

function Foto({ base, alt, className, prioridade }: { base: string; alt: string; className?: string; prioridade?: boolean }) {
  return (
    <img
      className={className}
      src={`${base}-480.webp`}
      srcSet={`${base}-480.webp 480w, ${base}-900.webp 900w`}
      sizes="(min-width: 900px) 480px, 100vw"
      width={480}
      height={640}
      alt={alt}
      loading={prioridade ? "eager" : "lazy"}
      fetchPriority={prioridade ? "high" : undefined}
      decoding="async"
    />
  );
}

export default function Home() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo envelope">
        <a href="#" className="topo__logo" aria-label="Quitandas da Dila — início">
          <img src="/img/logo-240.webp" srcSet="/img/logo-240.webp 1x, /img/logo-480.webp 2x" width={120} height={120} alt="Quitandas da Dila" />
        </a>
        <nav className="topo__nav" aria-label="Seções">
          <a href="#linha-mineira">Pão de Queijo</a>
          <a href="#sob-encomenda">Sob encomenda</a>
          <a href="#encomendar">Onde retirar</a>
        </nav>
        <a className="qd-botao qd-botao--primario topo__cta" href={LIGAR_URL}>
          <Icone nome="telefone" />
          <span>Ligar</span>
        </a>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="hero envelope">
          <div className="hero__texto">
            <div className="qd-faixa">
              <span className="qd-faixa__texto">
                Da cozinha da Dila para sua família. <Coracao tamanho={12} />
              </span>
            </div>

            <h1 className="qd-titulo-produto">
              <span className="qd-titulo-produto__linha">O verdadeiro sabor de</span>
              <span className="qd-titulo-produto__destaque">Minas</span>
            </h1>

            <p className="hero__lead">
              Pão de queijo e biscoito de queijo feitos à mão em Pompéu. Congelados todos os dias, ou quentinhos saindo
              do forno no horário que você marcar.
            </p>

            <div className="acoes">
              <a className="qd-botao qd-botao--primario qd-botao--lg" href={LIGAR_URL}>
                <Icone nome="telefone" tamanho={22} />
                <span>Ligar e encomendar</span>
              </a>
              <a className="qd-botao qd-botao--secundario qd-botao--lg" href={whatsapp()} target="_blank" rel="noopener">
                <Icone nome="whatsapp" tamanho={22} />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
            <p className="nota">Para um atendimento mais rápido, a Dila prefere ligação.</p>
          </div>

          <div className="hero__foto">
            <Foto base="/img/pao-de-queijo-assado" alt="Assadeira de pães de queijo dourados saindo do forno" prioridade />
            <span className="qd-selo qd-selo--redondo qd-selo--cafe">
              <Icone nome="congelado" tamanho={26} />
              Congelado pronta entrega
            </span>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="envelope" aria-label="Diferenciais">
          <ul className="qd-diferenciais">
            <li className="qd-diferenciais__item">
              <Icone nome="congelado" tamanho={30} />
              <span>Pronta entrega todo dia</span>
            </li>
            <li className="qd-diferenciais__item">
              <Icone nome="forno" tamanho={30} />
              <span>Assado na hora</span>
            </li>
            <li className="qd-diferenciais__item">
              <Icone nome="artesanal" tamanho={30} />
              <span>Produção artesanal</span>
            </li>
            <li className="qd-diferenciais__item">
              <Icone nome="receita-mineira" tamanho={30} />
              <span>Receita mineira</span>
            </li>
          </ul>
        </section>

        {/* LINHA MINEIRA */}
        <section className="secao envelope" aria-labelledby="linha-mineira">
          <TituloSecao id="linha-mineira">Linha Mineira</TituloSecao>
          <p className="secao__intro qd-slogan">
            Crocante por fora. Macio por dentro.
            <br />
            Do jeitinho mineiro.
          </p>

          <div className="produtos">
            <ProdutoMineiro
              nome="Pão de Queijo"
              descricao="Casquinha crocante e miolo macio, com gostinho de queijo de verdade."
              fotos={{
                assado: { base: "/img/pao-de-queijo-assado", alt: "Pães de queijo assados na assadeira" },
                congelado: { base: "/img/pao-de-queijo-congelado", alt: "Bandeja de pão de queijo congelado no filme" },
              }}
            />
            <ProdutoMineiro
              nome="Biscoito de Queijo"
              descricao="Douradinho e sequinho, perfeito para o café da tarde."
              fotos={{
                assado: { base: "/img/biscoito-de-queijo-assado", alt: "Biscoitos de queijo assados e dourados" },
                congelado: { base: "/img/biscoito-de-queijo-congelado", alt: "Bandeja de biscoito de queijo congelado no filme" },
              }}
            />
          </div>

          <div className="modos">
            <div className="modo">
              <span className="modo__icone">
                <Icone nome="congelado" tamanho={28} />
              </span>
              <div>
                <h3>Congelado</h3>
                <p>
                  Pronta entrega <strong>todos os dias</strong>, inclusive fins de semana e feriados. Leve pra casa e
                  asse no forno ou na Air Fryer.
                </p>
              </div>
            </div>
            <div className="modo">
              <span className="modo__icone">
                <Icone nome="forno" tamanho={28} />
              </span>
              <div>
                <h3>Assado</h3>
                <p>
                  Por encomenda: é só <strong>marcar o horário</strong> e buscar fresquinho, saindo do forno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOB ENCOMENDA */}
        <section className="secao secao--creme" aria-labelledby="sob-encomenda">
          <div className="envelope">
            <TituloSecao id="sob-encomenda">Sob Encomenda</TituloSecao>
            <p className="secao__intro qd-slogan">Para completar a mesa do café.</p>

            <div className="encomenda">
              <figure className="encomenda__foto">
                <Foto base="/img/bolo-de-fuba" alt="Bolo de fubá caseiro inteiro feito pela Dila" />
              </figure>

              <div className="cardapio">
                <div className="cardapio__grupo">
                  <h3>Bolos Caseiros</h3>
                  <ul>
                    <li>Bolo de Fubá</li>
                    <li>Bolo de Fubá Cremoso</li>
                    <li>Bolo de Trigo</li>
                    <li>Bolo de Trigo com Queijo</li>
                    <li className="suave">e outros sabores: pergunte!</li>
                  </ul>
                </div>
                <div className="cardapio__grupo">
                  <h3>Tarecos</h3>
                  <ul>
                    <li>Tarecos tradicionais</li>
                    <li>Tarecos com raspa de limão</li>
                  </ul>
                </div>
                <div className="cardapio__grupo">
                  <h3>Sobremesas</h3>
                  <ul>
                    <li>Pudim de Leite Condensado</li>
                  </ul>
                </div>
                <span className="qd-selo qd-selo--pilula qd-selo--claro">
                  <Icone nome="encomenda" tamanho={16} />
                  Sob encomenda
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* AFETO */}
        <section className="afeto envelope" aria-label="Sobre a Dila">
          <Arabesco largura={200} />
          <p className="afeto__frase">
            Tem cheiro de café passado na hora.
            <br />
            Tem sabor de receita de família.
            <br />
            Tem carinho em cada detalhe.
          </p>
        </section>

        {/* ENCOMENDAR */}
        <section className="secao envelope encomendar" aria-labelledby="encomendar">
          <h2 className="encomendar__titulo" id="encomendar">
            Faça sua encomenda
          </h2>
          <p className="secao__intro">Congelado tem todo dia. Assado, é só marcar o horário.</p>

          <div className="qd-barra">
            <a className="qd-barra__tel" href={LIGAR_URL}>
              <span className="qd-barra__icone">
                <Icone nome="telefone" tamanho={26} />
              </span>
              <span className="qd-barra__textos">
                <span className="qd-barra__chamada">Ligação ou WhatsApp</span>
                <span className="qd-barra__numero">{TELEFONE}</span>
              </span>
            </a>
            <a className="qd-barra__insta" href={INSTAGRAM_URL} target="_blank" rel="noopener">
              <Icone nome="instagram" tamanho={22} />
              <span>{INSTAGRAM}</span>
            </a>
            <p className="qd-barra__nota">Para um atendimento mais rápido e ágil, prefira a ligação.</p>
          </div>

          <div className="acoes acoes--centro">
            <a className="qd-botao qd-botao--primario qd-botao--lg" href={LIGAR_URL}>
              <Icone nome="telefone" tamanho={22} />
              <span>Ligar agora</span>
            </a>
            <a className="qd-botao qd-botao--secundario qd-botao--lg" href={whatsapp()} target="_blank" rel="noopener">
              <Icone nome="whatsapp" tamanho={22} />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          <a className="retirada" href={MAPA_URL} target="_blank" rel="noopener">
            <span className="retirada__icone">
              <Icone nome="local" tamanho={24} />
            </span>
            <span>
              <strong>Retirada</strong>
              <span className="retirada__end">{ENDERECO}</span>
              <span className="retirada__link">Ver no mapa</span>
            </span>
          </a>
        </section>
      </main>

      <footer className="rodape">
        <div className="xadrez" aria-hidden="true" />
        <div className="envelope rodape__conteudo">
          <p className="qd-slogan">
            Feito com carinho, do jeitinho mineiro. <Coracao tamanho={12} />
          </p>
          <p className="rodape__info">Quitandas da Dila · Pompéu – MG · {TELEFONE}</p>
        </div>
      </footer>

      {/* Barra fixa no celular */}
      <div className="barra-fixa" role="region" aria-label="Encomendar">
        <a className="qd-botao qd-botao--primario" href={LIGAR_URL}>
          <Icone nome="telefone" />
          <span>Ligar</span>
        </a>
        <a className="qd-botao qd-botao--secundario" href={whatsapp()} target="_blank" rel="noopener">
          <Icone nome="whatsapp" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
