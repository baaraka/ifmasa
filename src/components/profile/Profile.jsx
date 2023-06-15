import { Link } from "react-router-dom";
import "./Profile.scss";

function Profile() {
  return (
    <div className="profile">
      <div className="profileContainer">
        <h1>IFMASA MEMBER'S PROFILE</h1>
        <div className="pContainer">
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/1550700/pexels-photo-1550700.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/4556754/pexels-photo-4556754.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/6084298/pexels-photo-6084298.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/5940714/pexels-photo-5940714.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
          <div className="pContainerList">
            <img
              src="https://images.pexels.com/photos/5324947/pexels-photo-5324947.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <span>name: Baraka Ganai</span>
            <span>Education: Bachelor degree in information technology </span>
            <span>Research Interested: Web development</span>
          </div>
        </div>
        <Link to="/members" className="link">
          <button>VIEW MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
