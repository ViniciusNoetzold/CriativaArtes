import CursorTrail from './components/CursorTrail.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import Process from './components/Process.jsx';
import Products from './components/Products.jsx';

export default function App() {
  return (
    <>
      <CursorTrail />
      <NavBar />
      <main>
        <Hero />
        <Products />
        <Process />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
