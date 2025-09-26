import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Card {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface Column {
  id: string;
  title: string;
  color: string;
  cardIds: string[];
}

export interface BoardState {
  columns: { [key: string]: Column };
  cards: { [key: string]: Card };
  columnOrder: string[];
}

interface ReorderCardsPayload {
  columnId: string;
  startIndex: number;
  endIndex: number;
}

interface MoveCardPayload {
  startColumnId: string;
  endColumnId: string;
  cardId: string;
  startIndex: number;
  endIndex: number;
}

interface AddCardPayload {
  columnId: string;
  cardId: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
}


interface AddColumnPayload {
  columnId: string;
  title: string;
}
const generateRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const initialState: BoardState = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      color: '#4A3B94',
      cardIds: ['card-1', 'card-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      color: '#E06B22',
      cardIds: ['card-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      color: '#41A83E',
      cardIds: ['card-4', 'card-5'],
    },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet.',
      priority: 'Medium',
    },
    'card-2': {
      id: 'card-2',
      title: 'Blog Copywriting',
      description: 'Lorem ipsum dolor sit amet.',
      priority: 'Low',
    },
    'card-3': {
      id: 'card-3',
      title: 'User flow confirmation',
      description: 'Lorem ipsum dolor sit amet.',
      priority: 'High',
    },
    'card-4': {
      id: 'card-4',
      title: 'High Priority Task',
      description: 'Lorem ipsum dolor sit amet.',
      priority: 'High',
    },
    'card-5': {
      id: 'card-5',
      title: 'Low Priority Task',
      description: 'Lorem ipsum dolor sit amet.',
      priority: 'Low',
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    reorderCards: (state: BoardState, action: PayloadAction<ReorderCardsPayload>) => {
      const { columnId, startIndex, endIndex } = action.payload;

      const column = state.columns[columnId];
      if (!column) {
        return;
      }

      const newCardIds = Array.from(column.cardIds);
      const [removed] = newCardIds.splice(startIndex, 1);

      if (removed === undefined) {
        return;
      }

      newCardIds.splice(endIndex, 0, removed);
      column.cardIds = newCardIds;
    },
    moveCard: (state: BoardState, action: PayloadAction<MoveCardPayload>) => {
      const { startColumnId, endColumnId, cardId, startIndex, endIndex } = action.payload;

      const startColumn = state.columns[startColumnId];
      const endColumn = state.columns[endColumnId];
      if (!startColumn || !endColumn) {
        return;
      }

      const startCardIds = Array.from(startColumn.cardIds);
      startCardIds.splice(startIndex, 1);
      startColumn.cardIds = startCardIds;

      const endCardIds = Array.from(endColumn.cardIds);
      endCardIds.splice(endIndex, 0, cardId);
      endColumn.cardIds = endCardIds;
    },
    addCard: (state: BoardState, action: PayloadAction<AddCardPayload>) => {
      const { columnId, cardId, title, description, priority } = action.payload;

      const column = state.columns[columnId];
      if (!column) {
        return;
      }

      state.cards[cardId] = {
        id: cardId,
        title,
        description,
        priority
      };
      column.cardIds.push(cardId);
    },

    
    addColumn: (state, action: PayloadAction<AddColumnPayload>) => {
      const { columnId, title } = action.payload;
      state.columns[columnId] = {
        id: columnId,
        title: title,
        color: generateRandomHexColor(), 
        cardIds: [],
      };
      state.columnOrder.push(columnId);
    },

    
    removeColumn: (state, action: PayloadAction<string>) => {
      const columnIdToRemove = action.payload;
      const column = state.columns[columnIdToRemove];
      if (column) {
        column.cardIds.forEach(cardId => {
          delete state.cards[cardId];
        });
        
        delete state.columns[columnIdToRemove];
        
        state.columnOrder = state.columnOrder.filter(id => id !== columnIdToRemove);
      }
    },
  },
});


export const { reorderCards, moveCard, addCard, addColumn, removeColumn } = boardSlice.actions;

export default boardSlice.reducer;