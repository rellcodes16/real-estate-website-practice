import "./App.css";
import Companies from "./Component/Companies/Companies";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import GetStarted from "./Component/GetStarted/GetStarted";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Residencies from "./Component/Residencies/Residencies";
import Value from "./Component/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;

