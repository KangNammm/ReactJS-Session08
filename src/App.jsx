import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/About/AboutProduct";
import AboutUser from "./components/About/AboutUser";
import AboutIndex from "./components/About/AboutIndex";
import DemoNavigate from "./components/DemoNavigate";
import Course from "./components/DynamicRouter/Course";
import CourseDetail from "./components/DynamicRouter/CourseDetail";
import CourseDetailType from "./components/DynamicRouter/CourseDetailType";
import Admin from "./PrivateRouter/Admin";
import Login from "./PrivateRouter/Login";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Service from "./ReactRouter04/Service";
import Portfolio from "./ReactRouter04/Portfolio";
import About from "./ReactRouter04/About";
import Team from "./ReactRouter04/css/Team";
import Contact from "./ReactRouter04/Contact";
import Footer from "./ReactRouter04/Footer";
import Navbar from "./ReactRouter04/css/Navbar";
// import Home from "./ReactRouter03/Home";
// import About from "./ReactRouter03/About";
// import Portfolio from "./ReactRouter03/Portfolio";
// import Contact from "./ReactRouter03/Contact";
// import Navbar from "./ReactRouter03/Navbar";
function App() {
  const styleNavLink = ({ isActive }) => ({
    color: isActive ? "purple" : " white",
    backgroundColor: isActive ? "aquamarine" : "purple",
  });

  return (
    <>
      {/* dùng link */}
      {/* <ul>
        <li>
          <Link to={"/"}>Home Page</Link>
        </li>
        <li>
          <Link to={"/about"}>About Page</Link>
          <ul>
            <li>
              <Link to={"/about/about-product"}>About Product</Link>
            </li>
            <li>
              <Link to={"/about/about-user"}>About User</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contact"}>Contact Page</Link>
        </li>
      </ul> */}

      {/* dùng Navlink */}
      {/* <ul>
        <li>
          <NavLink to={"/"} style={styleNavLink}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={styleNavLink}>
            About Page
          </NavLink>
          <ul>
            <li>
              <NavLink to={"/about/about-product"} style={styleNavLink}>
                About Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about/about-user"} style={styleNavLink}>
                About User
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={"/contact"} style={styleNavLink}>
            Contact Page
          </NavLink>
        </li>
      </ul> */}

      {/* <DemoNavigate /> */}

      {/* cấu hình router */}
      {/* <Routes> */}
      {/* Router: nhận 2 giá trị
          + path: đường dẫn url
          + element: component tương ứng */}
      {/* <Route path="/" element={<HomePage />}></Route> */}
      {/* <Route path="/about" element={<AboutPage />}> */}
      {/* Router Index */}
      {/* <Route index element={<AboutIndex />}></Route> */}
      {/* định tuyến lồng nhau */}
      {/* <Route path="about-product" element={<AboutProduct />}></Route>
          <Route path="about-user" element={<AboutUser />}></Route> */}
      {/* </Route>
        <Route path="/contact" element={<ContactPage />}></Route> */}
      {/* Dynamic Router */}
      {/* <Route path="/course" element={<Course/>}></Route>
        <Route path="/course/:id" element={<CourseDetail/>}></Route>
        <Route path="/course/:id/:type" element={<CourseDetailType />}></Route> */}
      {/* Private Router */}
      {/* <Route element={<PrivateRouter/>}>
        <Route path="/admin" element={<Admin/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route> */}

      {/* router báo lỗi */}
      {/* <Route path="*" element={<NotFound />}></Route>
      </Routes> */}

      {/* <div className="wrapper d-flex align-items-stretch">
        <Navbar />
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn
                      btn-primary"
              >
                <i className="fa fa-bars" />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none
                      ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle
                      navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/about"}>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/portfolio"}>
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/contact"}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div> */}

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}


      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Service/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
