import "./App.css";
import { Contact } from "./pages/index/Contact";
import { Hero } from "./pages/index/Hero";
import { Portfolio } from "./pages/index/Portfolio";

function App() {
  return (
    <section>
      <div className="overflow-y-scroll h-screen scroll-snap-y-mandatory">
        <div className="scroll-snap-align-start">
          <Hero />
        </div>
        <div className="scroll-snap-align-start">
          <Portfolio />
        </div>
        <div className="scroll-snap-align-start">
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default App;
