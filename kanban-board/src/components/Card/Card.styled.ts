// src/components/Card/Card.styled.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex; // Добавляем
  justify-content: space-between; // Добавляем
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #2b2b2b;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
`;