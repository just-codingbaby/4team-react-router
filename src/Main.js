import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/Page";
import { TaejinIntroPage } from "./pages/taejin/Page";
import { HogeunIntroPage } from "./pages/hogeun/Page";
import { SujeongIntroPage } from "./pages/sujeong/Page";
import App from "./App.js";

export function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="taejin" element={<TaejinIntroPage />} />
          <Route path="hogeun" element={<HogeunIntroPage />} />
          <Route path="sujeong" element={<SujeongIntroPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
