import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Tracking from "./pages/Tracking/Tracking";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/AccountHandling/Login";
import NoPage from "./pages/NoPage/NoPage";
import Register from "./pages/AccountHandling/Register";
import Dashboard from "./pages/AccountHandling/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}