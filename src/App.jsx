import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Buttons from "./pages/Buttons";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Inputs from "./pages/Inputs";
import Forms from "./pages/Forms";
import Colors from "./pages/Colors";
import Animations from "./pages/Animations";
import CheckBoxes from "./pages/CheckBoxes";
import Modals from "./pages/Modals";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="cards" element={<Cards />} />
            <Route path="inputs" element={<Inputs />} />
            <Route path="forms" element={<Forms />} />
            <Route path="colors" element={<Colors />} />
            <Route path="modals" element={<Modals />} />
            <Route path="animations" element={<Animations />} />
            <Route path="checkboxes" element={<CheckBoxes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
