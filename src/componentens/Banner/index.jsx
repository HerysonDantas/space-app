import styled from "styled-components";

const FigureEstilizado = styled.figure`
  display: flex;
  align-items: center;
  border-radius: 20px;
  min-height: 328px;
  max-width: 100%;
  margin: 0;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
 
`;

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({ texto,backgroundImage }) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizado>
  );
};

export default Banner;
