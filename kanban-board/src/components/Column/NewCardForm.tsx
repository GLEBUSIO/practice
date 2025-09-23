import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCard } from '../../store/board/boardSlice';
import { FormContainer, Input, Select, Button } from './NewCardForm.styled';

interface NewCardFormProps {
  columnId: string;
  onAddCard: () => void;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ columnId, onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newCard = {
      columnId,
      cardId: uuidv4(),
      title,
      description,
      priority,
    };

    dispatch(addCard(newCard));
    setTitle('');
    setDescription('');
    onAddCard();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Select>
      <Button type="submit">Добавить карточку</Button>
    </FormContainer>
  );
};

export default NewCardForm;