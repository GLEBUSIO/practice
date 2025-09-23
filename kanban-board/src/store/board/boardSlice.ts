// src/store/board/boardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
    reorderCards: (state, action: PayloadAction<ReorderCardsPayload>) => {
      const { columnId, startIndex, endIndex } = action.payload;
      const newCardIds = Array.from(state.columns[columnId].cardIds);
      const [removed] = newCardIds.splice(startIndex, 1);
      newCardIds.splice(endIndex, 0, removed);
      state.columns[columnId].cardIds = newCardIds;
    },
    moveCard: (state, action: PayloadAction<MoveCardPayload>) => {
      const { startColumnId, endColumnId, cardId, startIndex, endIndex } = action.payload;
      
      const startCardIds = Array.from(state.columns[startColumnId].cardIds);
      startCardIds.splice(startIndex, 1);
      state.columns[startColumnId].cardIds = startCardIds;

      const endCardIds = Array.from(state.columns[endColumnId].cardIds);
      endCardIds.splice(endIndex, 0, cardId);
      state.columns[endColumnId].cardIds = endCardIds;
    },
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const { columnId, cardId, title, description, priority } = action.payload;
      
      state.cards[cardId] = {
        id: cardId,
        title,
        description,
        priority
      };
      
      state.columns[columnId].cardIds.push(cardId);
    },
  },
});

export const { reorderCards, moveCard, addCard } = boardSlice.actions;

export default boardSlice.reducer;