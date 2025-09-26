import React, { useState } from 'react';
import NewCardForm from './NewCardForm';
import { ColumnContainer, ColumnHeader, ColumnTitle, CardCount } from './Column.styled';
import styled from 'styled-components';

interface ColumnProps {
  title: string;
  color: string;
  cards: React.ReactNode[];
  id: string;
  onRemove: () => void; 
}

const AddCardButton = styled.button`
  padding: 8px;
  margin-top: 10px;
  border: 1px dashed #ccc;
  background-color: transparent;
  color: #888;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  &:hover {
    color: #f8d7da;
  }
`;

const ColumnHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

const StyledColumnTitle = styled(ColumnTitle)`
  color: #fff;
  margin: 0;
  padding: 0;
`;

const StyledCardCount = styled(CardCount)`
  background-color: #fff;
  color: ${({ color }) => color};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Column: React.FC<ColumnProps> = ({ title, color, cards, id, onRemove }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  return (
    <ColumnContainer>
      <ColumnHeader color={color}>
        <ColumnHeaderContent>
          <StyledCardCount color={color}>{cards.length}</StyledCardCount>
          <StyledColumnTitle>{title}</StyledColumnTitle>
        </ColumnHeaderContent>
        <RemoveButton onClick={onRemove}>&times;</RemoveButton>
      </ColumnHeader>
      {cards}
      {isAddingCard ? (
        <NewCardForm columnId={id} onAddCard={() => setIsAddingCard(false)} />
      ) : (
        <AddCardButton onClick={() => setIsAddingCard(true)}>
          + Добавить задачу
        </AddCardButton>
      )}
    </ColumnContainer>
  );
};

export default Column;
