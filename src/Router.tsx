import { Route, Routes } from "react-router-dom";
import { OneCharacter } from "./components/OneCharacter";
import { Create } from "./pages/Create";
import { Home } from "./pages/Home";
import { MyCharacter } from "./pages/MyCharacter";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/home" element={<Home />} />
      <Route path="/MyCharacter/:slug" element={<MyCharacter />} />
    </Routes>
  )
}