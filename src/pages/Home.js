import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex-1 p-4 overflow-y-auto text-2xl greeting">
      <h2 className="text-4xl">Hi, I am Joaquim</h2>
      <h3 className="text-2xl font-bold">Software Engineer</h3>
      <p className="read-more">
        Read more
        <Link className="link link-info m-1" to={"/about"}>
          about me
        </Link>
        or
        <Link className="link link-info m-1" to={"/contact"}>
          contact me
        </Link>
      </p>
    </div>
  );
}

export default Home;
