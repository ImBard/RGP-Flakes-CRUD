import { Route, Routes } from "react-router-dom";
import { Create } from "./pages/Create";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}