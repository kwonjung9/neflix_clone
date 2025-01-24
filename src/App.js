import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Membership from "./components/Membership";
import MoveSlider from "./components/MoveSlider";
import Whyjoin from "./components/Whyjoin";
import Login from "./components/Login";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Header />
            <Banner />
            <MoveSlider />
            <Whyjoin />
            <FAQ />
            <Membership />
            <Footer />
          </div>
        }/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;