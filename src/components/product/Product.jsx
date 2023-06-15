import { Link } from "react-router-dom";
import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <div className="productContainer">
        <h1>IFMASA PRODUCTS</h1>
        <p>members books and publication</p>
        <div className="productContainerList">
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/3186386/pexels-photo-3186386.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Exploring the Frontiers of Science</h2>
                <p>
                  A Collection of Research Papers" - A compilation of research
                  papers authored by IFMASA members, showcasing their
                  contributions to various scientific disciplines.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Leadership Matters</h2>
                <p>
                  Insights and Inspirations for Tomorrow's Leaders" - A book
                  featuring essays, interviews, and personal anecdotes from
                  IFMASA leaders, sharing their experiences and perspectives on
                  effective leadership.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/1848731/pexels-photo-1848731.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Interdisciplinary Dialogues</h2>
                <p>
                  Exploring the Intersection of Ideas" - A publication
                  highlighting collaborative projects and scholarly discussions
                  among IFMASA members, focusing on the value of
                  interdisciplinary research and thinking.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/8199560/pexels-photo-8199560.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Voices of Change</h2>
                <p>
                  Essays on Social Impact and Transformation" - A collection of
                  thought-provoking essays written by IFMASA members, examining
                  critical social issues and proposing innovative solutions for
                  positive change.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Innovation Unleashed</h2>
                <p>
                  Case Studies in Entrepreneurship and Technology" - A
                  publication showcasing real-life case studies of IFMASA
                  members who have embarked on entrepreneurial ventures or made
                  significant contributions in the field of technology.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainerListItem">
            <div className="containerImage">
              <img
                src="https://images.pexels.com/photos/15959383/pexels-photo-15959383/free-photo-of-young-woman-in-a-blue-dress-tossing-her-mortarboard.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
              />
              <div className="containerOverlay">
                <h2>Global Perspectives</h2>
                <p>
                  Exploring Cultures and Societies Around the World" - A book
                  featuring insightful articles and personal narratives from
                  IFMASA members, offering diverse perspectives on global
                  cultures, traditions, and social dynamics.
                </p>
                <div className="rating">
                  <span>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                    <i className="star fa-solid fa-star"></i>
                  </span>
                  <p className="pStar">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/products">
          <button>VIEW MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
