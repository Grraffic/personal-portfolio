import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Review from "./components/Review";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Header />
          <About />
          <Education />
          <Experience />
          <Service />
          <Portfolio />
          <Review />
          <Contact />
        </div>
      </div>
      {/* Back to Top */}
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
