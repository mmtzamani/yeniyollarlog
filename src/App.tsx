import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Tracking from "./pages/Tracking";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/preview_page_v2.html"
                element={<Navigate to="/" replace />}
              />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}