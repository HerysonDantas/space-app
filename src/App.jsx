import { styled } from "styled-components";
import EstilosGlobais from "./componentens/EstilosGlobais";
import Cabecalho from "./componentens/Cabecalho";
import BarraLateral from "./componentens/BarraLateral";
import Banner from "./componentens/Banner";
import Galeria from "./componentens/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentens/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FooterEstilizado = styled.footer`
display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;
const IconesContainer = styled.div`
  margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;
const App = () => {
  
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo =
        !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={"/imagens/banner.png"}
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <FooterEstilizado>
        <IconesContainer>
          <li>
            <a href="https://www.facebook.com/heryson.cirilo">
              <img
                src="/imagens/sociais/facebook.svg"
                alt="Icone do Facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/Heryson_cirilo">
              <img src="/imagens/sociais/twitter.svg" alt="Icone do Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/herysoncirilo">
              <img
                src="/imagens/sociais/instagram.svg"
                alt="Icone do Instagram"
              />
            </a>
          </li>
        </IconesContainer>

        <RodapeTexto>Desenvolvido por Heryson Dantas</RodapeTexto>
      </FooterEstilizado>
    </FundoGradiente>
  );
};

export default App;
