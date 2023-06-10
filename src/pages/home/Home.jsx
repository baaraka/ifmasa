import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Leader from "../../components/leader/Leader";
import NavBar from "../../components/navBar/NavBar";
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
    </div>
  );
}

export default Home;
