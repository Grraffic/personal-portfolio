function Header() {
  return (
    <>
      <div className="header" id="header">
        <div className="content-inner">
          <p>I'm</p>
          <h1>
            <span className="user">Grraffic</span> Designer
          </h1>
          <h2 />
          <div className="typed-text">
            Web Designer, Web Developer, Front End Developer, Apps Developer,
            Graphic Designer
          </div>
        </div>
      </div>
      <div className="large-btn">
        <div className="content-inner">
          <a href="./assets/img/Resume.pdf" className="btn" download>
            <i className="fa fa-download" />
            Download Resume
          </a>
          <a className="btn" href="https://github.com/Grraffic">
            <i className="fa fa-hands-helping" />
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
