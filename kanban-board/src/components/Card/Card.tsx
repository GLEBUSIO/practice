import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { CardContainer, CardHeader, CardTitle, CardDescription } from './Card.styled';
import styled from 'styled-components';

interface CardProps {
  id: string;
  index: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low'; 
}


const PriorityTag = styled.span<{ priority: 'High' | 'Medium' | 'Low' }>`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 24px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ priority, theme }) => {
    switch (priority) {
      case 'High':
        return theme.colors.red;
      case 'Medium':
        return theme.colors.orange;
      case 'Low':
        return theme.colors.green;
      default:
        return theme.colors.gray;
    }
  }};
`;

const Card: React.FC<CardProps> = ({ id, index, title, description, priority }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <PriorityTag priority={priority}>{priority}</PriorityTag>
          </CardHeader>
          <CardDescription>{description}</CardDescription>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default Card;