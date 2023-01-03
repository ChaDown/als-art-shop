import { render, screen } from '@testing-library/react';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';

test('The landing page is rendered', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
