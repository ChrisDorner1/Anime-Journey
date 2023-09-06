import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./components/homepage/homepage";
import Header from "./components/header/header";
import Login from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUpForm";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";
import Search from "./components/search/search.js";
import List from "./components/watchlist/watchlist.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [typingDone, setTypingDone] = useState(false);
  const headerText = "Welcome To Anime Journey";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex === headerText.length) {
        clearInterval(typingInterval);
        setTypingDone(true);
      }
      charIndex++;
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Header />
          {typingDone && (
            <Routes className="nav">
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search" element={<Search />} />
              <Route path="/list" element={<List />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
          {typingDone && <Footer />}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
