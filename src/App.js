import "./App.scss";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Membership from "./components/Membership";
import MoveSlider from "./components/MoveSlider";
import Whyjoin from "./components/Whyjoin";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <MoveSlider />
      <Whyjoin />
      <FAQ />
      <Membership />
      <Footer />
    </div>
  );
};

export default App;