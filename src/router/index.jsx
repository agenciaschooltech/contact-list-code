import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../page/Contact";
import DetailsContact from "../page/DetailsContact";
import NewContact from "../page/NewContact";

function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/:contact" element={<DetailsContact />} />
        <Route path="/new_contact" element={<NewContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterManager;
