// src/components/Column/Column.tsx
import React, { useState } from 'react';
import NewCardForm from './NewCardForm';
import { ColumnContainer, ColumnHeader, ColumnTitle, CardCount } from './Column.styled';
import styled from 'styled-components';

interface ColumnProps {
  title: string;
  color: string;
  cards: React.ReactNode[];
  id: string; 
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

const Column: React.FC<ColumnProps> = ({ title, color, cards, id }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  return (
    <ColumnContainer>
      <ColumnHeader color={color}>
        <ColumnTitle>{title}</ColumnTitle>
        <CardCount>{cards.length}</CardCount>
      </ColumnHeader>
      {cards}
      {isAddingCard ? (
        <NewCardForm columnId={id} onAddCard={() => setIsAddingCard(false)} />
      ) : (
        <AddCardButton onClick={() => setIsAddingCard(true)}>
          + Добавить карточку
        </AddCardButton>
      )}
    </ColumnContainer>
  );
};

export default Column;