import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Camera from "./pages/Camera";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProjectOrbit" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ProjectOrbit/deteksi" element={<Camera />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);