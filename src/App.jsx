import CursorTrail from './components/CursorTrail.jsx';
import AboutBusiness from './components/AboutBusiness.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import Process from './components/Process.jsx';
import ProductCustomizer from './components/ProductCustomizer.jsx';
import Products from './components/Products.jsx';
import SiteBackground from './components/SiteBackground.jsx';
import Testimonials from './components/Testimonials.jsx';
import VisualBackground3D from './components/three/VisualBackground3D.jsx';
import useActiveScene from './hooks/useActiveScene.js';

export default function App() {
  const activeScene = useActiveScene();

  return (
    <>
      <SiteBackground activeScene={activeScene} />
      <VisualBackground3D activeScene={activeScene} />
      <CursorTrail />
      <NavBar />
      <main>
        <Hero />
        <AboutBusiness />
        <Products />
        <ProductCustomizer />
        <Process />
        <Gallery />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
