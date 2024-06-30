import If from "@/components/If";
import { Ilustracoes1ParceiroCarousel } from "@/components/Ilustracoes1ParceiroCarousel";
import AspasInferior from "@/public/parceiros/Aspas_inferior";
import AspasSuperior from "@/public/parceiros/Aspas_superior";
import { ProdutosParceiro } from "./components/ProdutosParceiro";

const { serverFetcher } = require("@/lib/util/server-fetcher");

async function loadData({ cdparceiro }) {
  const dataMap = new Map();

  const parceiro = await serverFetcher(`/api/parceiros/${cdparceiro}`);

  if (parceiro.error)
    return {
      error: parceiro.error,
    };

  dataMap.set("parceiro", parceiro);

  return {
    data: dataMap,
  };
}

export default async function ParceiroPage({ params }) {
  const { data, error } = await loadData({
    cdparceiro: params.cdparceiro,
  });

  if (error) return <>{error}</>;

  const parceiro = data.has("parceiro") ? data.get("parceiro") : undefined;

  const layoutImages = parceiro?.ilustracoes1?.layout || [];

  return (
    <If
      condition={!data.has("error") && data.has("parceiro")}
      fallback={
        <section>
          <span>Erro ao carregar informações</span>
          <span className="whitespace-pre-line">{data.get("error")}</span>
        </section>
      }
    >
      <section className="flex w-full flex-col items-center justify-start">
        <div
          id="banner-top"
          className="aspect-video w-full bg-cover bg-no-repeat md:aspect-[16/6]"
          style={{
            backgroundImage: `url(${parceiro?.ilustracoes1?.bannerTop})`,
          }}
        />

        <ProdutosParceiro
          nmparceiro={parceiro?.nmparceiro}
          produtos={parceiro?.produtos}
        />

        <div
          id="video-center-container"
          className="w-full max-w-page-limit p-4 xs:p-7 md:p-11"
        >
          <iframe
            id="video-center-iframe"
            className="aspect-video w-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            src={parceiro?.ilustracoes1?.videoCenter}
          />
        </div>

        <div
          id="perfil-e-ilustracoes"
          className="flex w-full max-w-page-limit items-start justify-start gap-16 overflow-hidden p-4 max-lg:flex-col max-lg:items-center xs:p-7 md:px-11 md:py-4"
        >
          <div
            id="perfil"
            className="flex w-full flex-col items-start justify-start gap-4 md:gap-10"
          >
            <span id="nickname" className="text-3xl font-bold">
              {parceiro?.nmparceiro}
            </span>

            <ul id="detalhes" className="grid grid-cols-2 gap-y-2 md:gap-y-4">
              {[
                {
                  label: "Nome",
                  value: parceiro?.nmsocial,
                },
                {
                  label: "Função",
                  value: parceiro?.nmfuncao,
                },
                {
                  label: "Região",
                  value: parceiro?.nmregiao,
                },
                {
                  label: "Jogos",
                  value: parceiro?.nmjogos?.join(", "),
                },
              ].map((detalhe) => (
                <li
                  key={detalhe.label}
                  id="detalhes-item"
                  className="flex flex-col items-start justify-start"
                >
                  <span className="text-xs font-semibold">{detalhe.label}</span>
                  <span className="text-sm">{detalhe.value}</span>
                </li>
              ))}
            </ul>

            <span
              id="descricao"
              className="w-full whitespace-pre-line text-base font-normal"
            >
              {parceiro.nmdescricao}
            </span>
          </div>

          <div id="slide" className="max-lg:w-full lg:w-[55%]">
            <Ilustracoes1ParceiroCarousel
              items={parceiro?.ilustracoes1?.slide || []}
            />
          </div>
        </div>
        <div
          id="frase-container"
          className="relative flex w-full max-w-page-limit items-center justify-center bg-preto text-white max-xs:aspect-video xs:aspect-[16/6]"
        >
          <AspasSuperior className="absolute left-2 top-2 h-fit w-5 xs:w-8 md:w-14 lg:w-20" />

          <span className="p-5 text-center text-2xs font-semibold xs:p-8 xs:text-sm md:p-14 lg:p-20 lg:text-3xl">
            {parceiro["nmopiniaopg"]}
          </span>

          <AspasInferior className="absolute bottom-2 right-2 h-fit w-5 xs:w-8 md:w-14 lg:w-20" />
        </div>
        <div
          id="image-grid"
          className="grid w-full max-w-page-limit grid-cols-4 gap-4 max-md:gap-1 max-md:p-1 md:p-3"
        >
          <img
            className="col-span-1 row-span-2 aspect-square h-full w-full bg-contain"
            src={layoutImages[0]}
            alt="Imagem do topo esquerdo do grid de 5 elementos"
          />
          <img
            className="col-span-2 row-span-3 aspect-square h-full w-full bg-contain"
            src={layoutImages[1]}
            alt="Imagem central do grid de 5 elementos"
          />
          <img
            className="col-span-1 row-span-2 aspect-square h-full w-full bg-contain"
            src={layoutImages[2]}
            alt="Imagem do topo direito do grid de 5 elementos"
          />
          <img
            className="col-span-1 row-span-1 aspect-video h-full w-full bg-contain"
            src={layoutImages[3]}
            alt="Imagem do solo esquerdo do grid de 5 elementos"
          />
          <img
            className="col-span-1 row-span-1 aspect-video h-full w-full bg-contain"
            src={layoutImages[4]}
            alt="Imagem do solo esquerdo do grid de 5 elementos"
          />
        </div>
      </section>
    </If>
  );
}
