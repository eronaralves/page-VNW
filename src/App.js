import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// Components
import Nav from "./Components/Nav";

// Pages
import Home from "./pages/home";

// Styles
import {GlobalStyle, Container} from "./global"

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

