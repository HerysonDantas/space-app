import { styled } from "styled-components";
import EstilosGlobais from "./componentens/EstilosGlobais";
import Cabecalho from "./componentens/Cabecalho";
import BarraLateral from "./componentens/BarraLateral";
import Banner from "./componentens/Banner";
import Galeria from "./componentens/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentens/ModalZoom";
import BotaoIcone from "./componentens/BotaoIcone";

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
  align-items:center;
  height:80px;
  margin-top: 70px;
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  p{
    color:#ffffff;
    font-size:20px;
    margin-right:23px;
  }
`;
const IconesContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin: 0;
  flex-direction: row;
  gap: 24px;
`;
const App = () => {
  const [fotosDaGaleriaOriginal, setFotosDaGaleriaOriginal] = useState(fotos);
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoPesquisar = (conteudoPesquisa) => {
    if (!conteudoPesquisa) {
      return setFotosDaGaleria(fotosDaGaleriaOriginal);
    }

    setFotosDaGaleria(
      fotosDaGaleriaOriginal.filter((foto) =>
        foto.titulo.includes(conteudoPesquisa)
      )
    );
  };

  const aoFiltrar = (tagSelecionada) => {
    if (!tagSelecionada || tagSelecionada === 0) {
      return setFotosDaGaleria(fotosDaGaleriaOriginal);
    }

    setFotosDaGaleria(
      fotosDaGaleriaOriginal.filter((foto) => foto.tagId === tagSelecionada)
    );
  };

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    setFotosDaGaleriaOriginal(
      fotosDaGaleriaOriginal.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );

    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoPesquisar={aoPesquisar} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={"src/assets/banner.png"}
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFiltrar={aoFiltrar}
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
          <BotaoIcone>
            <a href="https://www.facebook.com/heryson.cirilo">
              <img
                src="../public/imagens/sociais/facebook.svg"
                alt="Icone do Facebook"
              />
            </a>
          </BotaoIcone>
          <BotaoIcone>
            <a href="https://x.com/Heryson_cirilo">
              <img
                src="../public/imagens/sociais/twitter.svg"
                alt="Icone do Twitter"
              />
            </a>
          </BotaoIcone>
          <BotaoIcone>
            <a href="https://instagram.com/herysoncirilo">
              <img
                src="../public/imagens/sociais/Instagram.svg"
                alt="Icone do Instagram"
              />
            </a>
          </BotaoIcone>
        </IconesContainer>

        <p>Desenvolvido por Heryson Dantas</p>
      </FooterEstilizado>
    </FundoGradiente>
  );
};

export default App;
