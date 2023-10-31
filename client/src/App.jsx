import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import Home from "./Home";
import Mau from "./Mau";
import Nhan from "./Nhan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/mau" element={<Mau />} />
          <Route index path="/nhan" element={<Nhan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
