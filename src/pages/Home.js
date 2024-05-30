import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex-1 self-center p-4 overflow-y-auto greeting">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-md">
            <h2 className="text-6xl font-bold">Hi, I am Joaquim</h2>
            <h3 className="text-4xl font-thin">Software Engineer</h3>
            <p className="py-6 text-2xl read-more">
              Always Meeting End-User Requirements With Innovation. Read more
              <Link className="link link-info m-1" to={"/about"}>
                about me.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
