import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {
    return (
        <Router>
          <Navbar />
           <Wrapper>
              <Route exact path="/Krieffer_Portfolio" component={About} />
              <Route exact path="/Krieffer_Portfolio/about" component={About} />
              <Route exact path="/Krieffer_Portfolio/portfolio" component={Portfolio} />
              <Route exact path="/Krieffer_Portfolio/contact" component={Contact} />
            </Wrapper>
          <Footer />
        </Router>
    );
}

export default App;
