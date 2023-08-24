import "./App.css";
import AccountCards from "./components/Bank cards/AccountCards";
import SectionOne from "./components/Section one/SectionOne";
import Header from "./components/header/Header.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contacts/Contacts";
import Team from "./components/Team/Team";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="account_comp">
      <AccountCards />
      </div>
      <SectionOne />
      <Testimonials />
      <Contact />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
