import "./News.scss";

function News() {
  return (
    <div className="news">
      <div className="newsContainer">
        <h1>IFMASA NEW LETTERS</h1>
        <h2>Subscribe to our Newsletter</h2>
        <p>Enter your Email address to get daily and news</p>
        <form>
          <input type="email" placeholder="Enter Your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default News;
