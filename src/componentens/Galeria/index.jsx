import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
  ul {
    all: unset;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 24px;
  }
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoFiltrar }) => {
  return (
    <>
      <Tags aoFiltrar={aoFiltrar}/>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue Pela Galeria</Titulo>
          <ul>
            {fotos.map((foto) => (
              <li key={foto.id}>
                <Imagem
                  aoZoomSolicitado={aoFotoSelecionada}
                  aoAlternarFavorito={aoAlternarFavorito}
                  foto={foto}
                  key={foto.id}
                />
              </li>
            ))}
          </ul>
        </SecaoFluida>

        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
