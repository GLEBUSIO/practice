import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { RootState } from './store/store';
import { reorderCards, moveCard } from './store/board/boardSlice';
import Column from '@components/Column/Column';
import Card from '@components/Card/Card';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: ${theme.colors.background};
  
  // Медиа-запрос для мобильных устройств
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppContainer>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
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
                    cards={columnCards.map((card, index) => (
                      <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        id={card.id}
                        index={index}
                        priority={card.priority}
                      />
                    ))}
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