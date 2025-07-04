import { styled } from "styled-components";
import search from "./search.png";
import { Children } from "react";
import Tags from "../Galeria/Tags";
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;
const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = ({props, aoPesquisar}) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado placeholder="O que você procura?" {...props} onChange={(event)=>aoPesquisar(event.target.value)}/>
      <IconeLupa src={search} alt="Ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
