import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./components/homepage/homepage";
import Header from "./components/header/header";
import Login from "./components/login/login.js";
import Footer from "./components/footer/footer.js";
import { watchlist } from "./components/watchlist/watchlist";
import { search } from "./components/search/search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const loginTimer = setTimeout(() => {
      setShowLogin(true);
    }, 3500);

    const footerTimer = setTimeout(() => {
      setShowFooter(true);
    }, 4500);

    return () => {
      clearTimeout(loginTimer);
      clearTimeout(footerTimer);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="Login" element={<Login/>}className="grow-animation"> {showLogin}</Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
