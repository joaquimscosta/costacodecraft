import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex-1 self-center p-4 overflow-y-auto greeting">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h2 className="text-6xl font-bold">👋 Hi, I'm Joaquim.</h2>
            <h3 className="text-4xl font-thin">Software Engineer</h3>
            <p className="py-6 text-2xl tracking-wide read-more">
              Always Meeting End-User Requirements With Innovation. Read more
              <Link className="link link-info m-1" to={"/about"}>
                about me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
