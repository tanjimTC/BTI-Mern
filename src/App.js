import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import UsersContainer from "./containers/UsersContainer";
import BlogContainer from "./containers/BlogContainer";
import SpecificBlogContainer from "./containers/SpecificBlogContainer";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleUserRender = (response) => {
    localStorage.setItem("bti_mern_user_token", response.data.token);
    localStorage.setItem("bti_mern_local_user", JSON.stringify(response.data));
    setUser(response.data);
  };

  const handleLogOut = () => {
    localStorage.removeItem("bti_mern_user_token");
    localStorage.removeItem("bti_mern_local_user");
    setUser(null);
  };

  useEffect(() => {
    const localUser = localStorage.getItem("bti_mern_local_user")
      ? JSON.parse(localStorage.getItem("bti_mern_local_user"))
      : null;
    setUser(localUser);
  }, []);

  return (
    <Router className="antialiased">
      <NavBar user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/blog" element={<BlogContainer />} />
        <Route path="/specific-blog/:id" element={<SpecificBlogContainer />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/sign-in"
          element={<SignIn handleUserRender={handleUserRender} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
