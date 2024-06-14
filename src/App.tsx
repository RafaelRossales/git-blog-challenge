import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"
import Home from "./pages/home/home"
import { RepositoryProvider } from "./context/RepositoryContext"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./routes/layout/layout"
import Post from "./components/post"
import { BrowserRouter as Router } from 'react-router-dom';

function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <RepositoryProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<Home key="post" />} />
      </Routes>
      </RepositoryProvider>
    </ThemeProvider>
    )
}

export default App
