export const theme = {
  colors: {
    primary: '#3a86ff',
    secondary: '#fb5607',
    background: '#f8f9fa',
    text: '#212529',
    cardBackground: '#ffffff',
    columnHeader: {
      todo: '#7064d7',
      inProgress: '#f79f24',
      done: '#00a36a',
    },
   
    red: '#E84A4A',
    orange: '#F59A23',
    green: '#56B864',
    gray: '#6c757d',
  },
  breakpoints: {
    mobile: '390px',
    tablet: '768px',
    desktop: '1200px',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
  },
};

export type Theme = typeof theme;