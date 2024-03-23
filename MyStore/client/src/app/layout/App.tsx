import { useEffect, useState } from "react";
import {Product} from '../models/product.ts';
import Catalog from "../../features/catalog/catalog.tsx";
import Header from "./Header.tsx";
import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette:{
      mode: paletteType
    }
  })

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar theme="colored "/>
      <CssBaseline />
      <Header toggleTheme={toggleTheme}/>
      <Container><Outlet /></Container>
      </ThemeProvider>
    </>
  )
}

export default App
