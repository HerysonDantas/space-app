import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  gap: 69px;
  margin-top:56px;
  align-items:center;
  
`;
const TagsBotoesContainer = styled.div`
  display: flex;
  
  gap: 24px;
`;

const BotaoEstilizado = styled.button`
   font-size: 24px;
    color: #FFFFFF;
    font-weight:400;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;
const ParagrafoTagsEstilizado = styled.h3`
    color: #ffffff;
    font-size:24px;
    font-weight:400;
    margin: 0;

`;

const Tags = ({setTag}) => {
    
    return (
        <TagsContainer>
            <ParagrafoTagsEstilizado>Busque por tags:</ParagrafoTagsEstilizado>
            <TagsBotoesContainer>
                {tags.map((tag) => (
                    
                    <BotaoEstilizado key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</BotaoEstilizado>
                ))}
            </TagsBotoesContainer>

        </TagsContainer>
    );
};

export default Tags;
