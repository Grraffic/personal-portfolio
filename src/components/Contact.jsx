function Contact() {
  return (
    <>
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
                  <a href="mailto:info@example.com">ramosraf278@gmail.com</a>
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
                  <a className="btn" href="https://www.facebook.com/xdraf56">
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
                  <a className="btn" href="https://www.youtube.com/@mscthrpy">
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
    </>
  );
}

export default Contact;
