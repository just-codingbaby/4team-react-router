import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/Page";
import { TaejinIntroPage } from "./pages/taejin/Page";
import { HogeunIntroPage } from "./pages/hogeun/Page";
import { YousukIntroPage } from "./pages/yousuk/Page";
import { HaechanIntroPage } from "./pages/haechan/Page.js";
import App from "./App.js";

export function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="taejin" element={<TaejinIntroPage />} />
          <Route path="hogeun" element={<HogeunIntroPage />} />
          <Route path="yousuk" element={<YousukIntroPage />} />
          <Route path="haechan" element={<HaechanIntroPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
