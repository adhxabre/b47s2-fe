import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { Routes, Route, Link } from "react-router-dom";

// import "pages" component here
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/SignIn";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <>
      <div>
        {/* Setup navigation here */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>
        {/* code <Routes> and <Route> below, according to path and component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
