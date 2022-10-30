import {useEffect} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Future from "./components/Future";
import Information from "./components/Information";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ once: true});
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
        <Hero />
        <AboutUs />
        <Future />
        <Information />
    </div>
  );
}

export default App;
