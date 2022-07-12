import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// Pages
import Home from "./pages/home";

// Styles
import {GlobalStyle, Container} from "./styles/global"

export default function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

