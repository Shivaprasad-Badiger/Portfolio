import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./features/home/Portfolio";
import NotFound from "./features/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
