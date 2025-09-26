import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd';
import { type RootState } from './store/store';
import { reorderCards, moveCard, addColumn, removeColumn } from './store/board/boardSlice';
import Column from '@components/Column/Column';
import Card from '@components/Card/Card';
import { theme } from './styles/theme';
import { v4 as uuidv4 } from 'uuid';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: ${theme.colors.background};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const AddColumnButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & svg {
    width: 48px;
    height: 48px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const App: React.FC = () => {
  const boardState = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();
  const { columnOrder, columns, cards } = boardState;

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    if (destination.droppableId === source.droppableId) {
      dispatch(reorderCards({ columnId: source.droppableId, startIndex: source.index, endIndex: destination.index }));
    } else {
      dispatch(moveCard({ startColumnId: source.droppableId, endColumnId: destination.droppableId, cardId: draggableId, startIndex: source.index, endIndex: destination.index }));
    }
  };

  const handleAddColumn = () => {
    const newColumnTitle = prompt('Введите название для новой колонки:');
    if (newColumnTitle) {
      const newColumnId = uuidv4();
      dispatch(addColumn({ columnId: newColumnId, title: newColumnTitle }));
    }
  };

  const handleRemoveColumn = (columnId: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту колонку и все её карточки?')) {
      dispatch(removeColumn(columnId));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header>
        <h1>Kanban Dashboard</h1>
        <AddColumnButton onClick={handleAddColumn}>
          <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" stroke="#D1D9E6" fill="white"/>
            <path d="M25 18V32M18 25H32" stroke="#4B566B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </AddColumnButton>
      </Header>
      <AppContainer>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          
          if (!column) {
            return null;
          }

          const columnCards = column.cardIds.map((cardId) => cards[cardId]);

          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ minWidth: 350, margin: '0 16px' }}
                >
                  <Column
                    key={column.id}
                    id={column.id}
                    title={column.title}
                    color={column.color}
                    onRemove={() => handleRemoveColumn(column.id)}
                    cards={columnCards.map((card, index) => {
                      if (!card) {
                        return null;
                      }
                      
                      return <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        id={card.id}
                        index={index}
                        priority={card.priority}
                      />
                    })}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </AppContainer>
    </DragDropContext>
  );
};

export default App;
