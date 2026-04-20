import { Route, Routes } from "react-router";
import { About, Banner, Contact, Feature, Footer, HeroSection, Navbar, Service } from "./components";
import Login from "./page/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <HeroSection />
          <Feature/>
          <Banner />
          <About />
          <Service />
          <Contact />
          <Footer />
          </>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Banner />} />
      </Routes>
    </div>
  );
};

export default App;
