import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookRide from "./pages/BookRide";
import History from "./pages/History";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookRide />} />
      <Route path="/history" element={<History />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
