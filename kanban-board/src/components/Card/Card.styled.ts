import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-left: 5px;
  color: #2b2b2b;
  word-wrap: keep-all;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
  margin-left: 5px;
`;