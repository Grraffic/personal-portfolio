function Portfolio() {
  return (
    <>
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
                <li data-filter=".dig-mar">Video Editing</li>
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
                    src="./assets/img/Food.png"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="./assets/img/Food.png"
                    data-lightbox="portfolio"
                    data-title="Project Name"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    href="https://foodwebo.netlify.app/"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="#">
                    Food Website <span>Web Development</span>
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-des">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/Daniels.png"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="./assets/img/Daniels.png"
                    className="link-preview"
                    data-lightbox="portfolio"
                    data-title="Project Name"
                    title="Preview"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    href="https://danielscof.netlify.app/"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="#">
                    Daniel's Coffee Website <span>Web Development</span>
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-des">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/Daniels.png"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="./assets/img/Daniels.png"
                    className="link-preview"
                    data-lightbox="portfolio"
                    data-title="Project Name"
                    title="Preview"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    href="https://www.figma.com/proto/kJZQ7lmNOEFWeN7BkEWuXn/Untitled?node-id=0-1&t=IZUjyszG77a1xFMk-1"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="#">
                    Daniel's Coffee Design <span>Web Design</span>
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/Personal.png"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="./assets/img/Personal.png"
                    className="link-preview"
                    data-lightbox="portfolio"
                    data-title="Project Name"
                    title="Preview"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    href="https://lvcc-rafael-ramos.netlify.app/#"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="#">
                    Personal Portfolio <span>Web Development</span>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
