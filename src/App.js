import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
