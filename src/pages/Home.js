import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex-1 self-center p-4 overflow-y-auto hero greeting">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold">Hi, I am Joaquim</h2>
          <h3 className="text-3xl font-thin">Software Engineer</h3>
          <p className="py-6 text-2xl read-more">
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
      </div>
    </div>
  );
}

export default Home;
