import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// Optional: Customize MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Default Material-UI blue
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </StrictMode>,
)
