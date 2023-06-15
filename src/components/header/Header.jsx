import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const images = [
    "https://images.pexels.com/photos/5553974/pexels-photo-5553974.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/10823334/pexels-photo-10823334.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/7972729/pexels-photo-7972729.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/15005450/pexels-photo-15005450/free-photo-of-backview-of-a-female-graduate-in-academic-dress-holding-a-graduation-cap.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/5553642/pexels-photo-5553642.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/5859321/pexels-photo-5859321.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/7972737/pexels-photo-7972737.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/8106676/pexels-photo-8106676.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImage((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="left">
          <h1>
            Welcome to our IFMASA - The Academic State Assembly: Uniting
            Scholars, Nurturing Excellence, and Empowering Minds to Shape the
            Future
          </h1>
          <p>
            Through collaboration, innovation, and a shared vision, we strive to
            create an empowering environment that nurtures the minds of future
            leaders. Join us as we build bridges between disciplines, inspire
            intellectual growth, and shape a brighter future together
          </p>
        </div>
        <div className="right">
          <div className="iconSlider">
            <i
              className="iSlider fa-solid fa-chevron-left"
              onClick={goToPreviousImage}
            ></i>
            <i
              className="iSlider fa-solid fa-chevron-right"
              onClick={goToNextImage}
            ></i>
          </div>
          <div className="imageSlider">
            <img src={images[currentImage]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
