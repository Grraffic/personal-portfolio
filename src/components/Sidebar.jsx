function sidebar() {
  return (
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
  );
}

export default sidebar;
