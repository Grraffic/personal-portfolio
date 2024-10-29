function About() {
  return (
    <>
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
                Hello, I’m <span className="FS">Rafael S. Ramos</span>, a
                passionate designer and programmer dedicated to creating
                seamless user experiences. With a background in both graphic
                design and software development, I thrive at the intersection of
                creativity and technology.
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
                  <p>Video Editing</p>
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
    </>
  );
}

export default About;
