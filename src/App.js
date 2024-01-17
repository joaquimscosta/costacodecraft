import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Content from "./components/Content";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Content content={Home} />} />
      <Route path="blog" element={<Content content={Blog} />} />
      <Route path="about" element={<Content content={AboutMe} />} />
      <Route path="projects" element={<Content content={Projects} />} />
      <Route path="contact" element={<Content content={Contact} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
