import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { KitchenDesign } from "./components/KitchenDesign";
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { About } from './components/About';
import { Suppliers } from './components/Suppliers';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Gallery />
      <KitchenDesign />
      <WhyChooseUs />
      <Process />
      <About />
      <Suppliers />
      <Contact />
    </div>
  );
}
