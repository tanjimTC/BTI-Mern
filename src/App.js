import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import UsersContainer from "./containers/UsersContainer";
import BlogContainer from "./containers/BlogContainer";
import SpecificBlogContainer from "./containers/SpecificBlogContainer";

function App() {
  return (
    <Router className="antialiased">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/blog" element={<BlogContainer />} />
        <Route path="/specific-blog/:id" element={<SpecificBlogContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
