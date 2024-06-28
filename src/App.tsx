import { ThemeProvider } from "styled-components"
import { defaultTheme } from "@styles/default"
import { GlobalStyle } from "@styles/global"
import { RepositoryProvider } from "./context/RepositoryContext"
import { Route, Routes } from "react-router-dom"
import Home from "@pages/home/Home"

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
