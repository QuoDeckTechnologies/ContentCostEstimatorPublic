import Home from "./home/Home.react"
import ContactForm from "./contactForm/ContactForm.react";
import Customise from "./customise/Customise.react";
import ViewDetails from "./viewDetails/ViewDetails.react";
import UtilitiesAndDetails from "./utilitiesAndDetails/UtilitiesAndDetails.react";
import ThankyouPage from "./contactForm/ThankyouPage.react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<ViewDetails />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/customise" element={<Customise />} />
        <Route path="/utilities" element={<UtilitiesAndDetails />} />
        <Route path="/thank-you" element={<ThankyouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
