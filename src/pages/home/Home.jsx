import About from "../../components/about/About";
import Consumption from "../../components/consumption/Consumption";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Leader from "../../components/leader/Leader";
import NavBar from "../../components/navBar/NavBar";
import News from "../../components/news/News";
import Product from "../../components/product/Product";
import Profile from "../../components/profile/Profile";
import "./Home.scss";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Leader />
      <Profile />
      <News />
      <Product />
      <Consumption />
      <Footer />
    </div>
  );
}

export default Home;
