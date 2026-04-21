import Card from "../card/page";

export default function section() {
  return (
    <>
      <section>
        <div className="flex gap-3 relative overflow-hidden overflow-x-auto">
          <div>
            <Card
              capa="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
              descricao=" HTML5 é uma linguagem de marcação hipertexto utilizada para criarsites. A versão 5 da linguagem foihomologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dosgrandes navegadores compatíveis."
              titulocard="Curso Html 5"
              href="home/123"
            />
          </div>
          <div>
            <Card
              capa="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
              descricao=" HTML5 é uma linguagem de marcação hipertexto utilizada para criarsites. A versão 5 da linguagem foihomologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dosgrandes navegadores compatíveis."
              titulocard="Curso Html 5"
              href="home/123"
            />
          </div>
          <div>
            <Card
              capa="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
              descricao=" HTML5 é uma linguagem de marcação hipertexto utilizada para criarsites. A versão 5 da linguagem foihomologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dosgrandes navegadores compatíveis."
              titulocard="Curso Html 5"
              href="home/123"
            />
          </div>
        </div>
      </section>
    </>
  );
}
