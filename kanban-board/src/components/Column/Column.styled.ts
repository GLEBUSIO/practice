// src/components/Column/Column.styled.ts
import styled from 'styled-components';

export const ColumnContainer = styled.div`
  background-color: #f1f2f6;
  border-radius: 12px;
  padding: 16px;
  width: 320px;
  min-height: 400px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%; // Делаем ширину 90% от экрана
    margin: 16px 0;
  }
`;

export const ColumnHeader = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColumnTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const CardCount = styled.span`
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;