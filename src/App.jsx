function App() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="./assets/img/Raf.jpg" alt="Image" />
          </div>
          <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                Navigation
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#header">
                      Home
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                      <i className="fa fa-address-card" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">
                      Service
                      <i className="fa fa-tasks" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                      <i className="fa fa-file-archive" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="sidebar-footer">
            <a href="https://www.instagram.com/graffphic/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com/xdraf56">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/ramos-rafael-3895ab29b/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="content">
          {/* Header Start */}
          <div className="header" id="header">
            <div className="content-inner">
              <p>I'm</p>
              <h1>Grraffic Designer</h1>
              <h2 />
              <div className="typed-text">
                Web Designer, Web Developer, Front End Developer, Apps
                Developer, Graphic Designer
              </div>
            </div>
          </div>
          {/* Header End */}
          {/* Large Button Start */}
          <div className="large-btn">
            <div className="content-inner">
              <a className="btn" href="/Resume.pdf">
                <i className="fa fa-download" />
                Resume
              </a>
              <a className="btn" href="#">
                <i className="fa fa-hands-helping" />
                Hire Me
              </a>
            </div>
          </div>
          {/* Large Button End */}
          {/* About Start */}
          <div className="about" id="about">
            <div className="content-inner">
              <div className="content-header">
                <h2>About Me</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <img src="./assets/img/Raf2.jpg" alt="Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <p>
                    Hello, I’m Rafael S. Ramos, a passionate designer and
                    programmer dedicated to creating seamless user experiences.
                    With a background in both graphic design and software
                    development, I thrive at the intersection of creativity and
                    technology.
                  </p>
                  <a className="btn" href="#">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>Design</p>
                      <p>85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="skill-name">
                      <p>Programming</p>
                      <p>95%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>Development</p>
                      <p>90%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="skill-name">
                      <p>Marketing</p>
                      <p>85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Education Start */}
          <div className="education" id="education">
            <div className="content-inner">
              <div className="content-header">
                <h2>Education</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-September-2022 <i>to</i> 17-July-2026
                    </span>
                    <h3>Bachelor Degree</h3>
                    <p>
                      I earned my Bachelor of Science in Information Systems,
                      where I delved into the integration of technology and
                      business processes.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-September-2022 <i>to</i> 17-July-2024
                    </span>
                    <h3>Associate Degree</h3>
                    <p>
                      I obtained an Associate Degree in Computer Technology,
                      focusing on foundational skills in computer hardware,
                      software, and networking.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      10-August-2020 <i>to</i> 31-April-2022
                    </span>
                    <h3>Senior High School</h3>
                    <p>
                      I completed my Senior High School education with a focus
                      on the ICT strand, where I delved into topics like
                      programming, web development, and digital communication.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      05-June-2016 <i>to</i> 20-April-2020
                    </span>
                    <h3>High School</h3>
                    <p>
                      I graduated from High School, where I developed a strong
                      foundation in various subjects while engaging in
                      extracurricular activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Education Start */}
          {/* Experience Start */}
          <div className="experience" id="experience">
            <div className="content-inner">
              <div className="content-header">
                <h2>Experience</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Codex Solution</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Project Manager</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Soft Solution Ltd</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Web Developer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>ABC Soft Ltd</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Web Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Soft Agency</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Graphic Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Start */}
          {/* Service Start */}
          <div className="service" id="service">
            <div className="content-inner">
              <div className="content-header">
                <h2>Service</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-desktop" />
                    <h3>Web Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-laptop" />
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-search" />
                    <h3>SEO</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-envelope-open-text" />
                    <h3>Digital Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service Start */}
          {/* Portfolio Start */}
          <div className="portfolio" id="portfolio">
            <div className="content-inner">
              <div className="content-header">
                <h2>Portfolio</h2>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".web-des">Design</li>
                    <li data-filter=".web-dev">Development</li>
                    <li data-filter=".dig-mar">Marketing</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/GET STARTED.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/GET STARTED.jpg"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        className="link-preview"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="https://www.figma.com/proto/j7CIDPusIc5JjtwMW9lcnG/Untitled?node-id=0-1&t=MjfAKoTXD8FNtVAS-1"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Daniel's Coffee <span>Web Design</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/portfolio-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/portfolio-2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Web Design</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/portfolio-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/portfolio-3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Web Development</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/portfolio-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/portfolio-4.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Web Development</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/portfolio-5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/portfolio-5.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Digital Marketing</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="./assets/img/portfolio-6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="./assets/img/portfolio-6.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Digital Marketing</span>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Start */}
          {/* Review Start */}
          <div className="review" id="review">
            <div className="content-inner">
              <div className="content-header">
                <h2>Review</h2>
              </div>
              <div className="row align-items-center review-slider">
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu suscipit orci. Donec molestie velit id libero
                        blandit, quis suscipit urna suscipit. Donec aliquet erat
                        eu lacinia iaculis. Ut tempor tellus eu sem pharetra
                        feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="./assets/img/review-1.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu suscipit orci. Donec molestie velit id libero
                        blandit, quis suscipit urna suscipit. Donec aliquet erat
                        eu lacinia iaculis. Ut tempor tellus eu sem pharetra
                        feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="./assets/img/review-2.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu suscipit orci. Donec molestie velit id libero
                        blandit, quis suscipit urna suscipit. Donec aliquet erat
                        eu lacinia iaculis. Ut tempor tellus eu sem pharetra
                        feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="./assets/img/review-3.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Review End */}
          {/* Contact Start */}
          <div className="contact" id="contact">
            <div className="content-inner">
              <div className="content-header">
                <h2>Contact</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-user" />
                      Rafael Ramos
                    </p>
                    <p>
                      <i className="fa fa-tag" />
                      Web Designer &amp; Developer
                    </p>
                    <p>
                      <i className="fa fa-envelope" />
                      <a href="mailto:info@example.com">
                        ramosraf278@gmail.com
                      </a>
                    </p>
                    <p>
                      <i className="fa fa-phone" />
                      <a href="tel:+1234567890">+63965-1221-953</a>
                    </p>
                    <p>
                      <i className="fa fa-map-marker" />
                      011 San Miguel ST. Payatas B Q.C
                    </p>
                    <div className="social">
                      <a className="btn" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn"
                        href="https://www.facebook.com/xdraf56"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn"
                        href="https://www.linkedin.com/in/ramos-rafael-3895ab29b/"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="btn"
                        href="https://www.instagram.com/graffphic/"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn"
                        href="https://www.youtube.com/@mscthrpy"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact End */}
          {/* Footer Start */}
          <div className="footer">
            <div className="content-inner">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p>
                    © Copyright <a href="https://htmlcodex.com">HTML Codex</a>.
                    All Rights Reserved
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Powered by <a href="https://htmlcodex.com">HTML Codex</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Start */}
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
