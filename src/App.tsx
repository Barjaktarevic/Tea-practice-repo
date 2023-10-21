// KOMPONENTA SE RE-RENDERA SAMO KAD SE STATE U USE STATEU PROMIJENI

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
