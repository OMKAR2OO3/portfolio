import "./App.css";
import { useEffect } from "react";
import Menu from "./components/Menu";
import About from "./components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Menu />
      <About />
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;
