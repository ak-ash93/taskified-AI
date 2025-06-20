import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './provider/theme-provider.tsx';
import { RouterProvider } from 'react-router';
import router from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
