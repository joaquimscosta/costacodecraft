import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="greeting content">
      <h2>Hi, I am Joaquim</h2>
      <h3>Software Engineer</h3>
      <p className="read-more">
        Read more <button onClick={() => navigate("/about")}>about me</button>{" "}
        or <button onClick={() => navigate("/contact")}>contact me</button>
      </p>
    </div>
  );
}

export default Home;
