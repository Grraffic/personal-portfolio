function Review() {
  return (
    <>
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
                    As a dedicated Web developer & designer, I take pride in my
                    ability to deliver exceptional results tailored to the
                    unique needs of each client. Here’s what some of my
                    customers have to say about their experiences working with
                    me:
                  </p>
                </div>
                <div className="review-img">
                  <img src="./assets/img/review-1.jpg" alt="Image" />
                  <div className="review-name">
                    <h3>Christian Aquino</h3>
                    <p>Professor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="review-slider-item">
                <div className="review-text">
                  <p>
                    The design of Daniel's coffee is beautiful, and the color
                    chosen is right.
                  </p>
                </div>
                <div className="review-img">
                  <img src="./assets/img/review-3.jpg" alt="Image" />
                  <div className="review-name">
                    <h3>Ronmar Calingasan</h3>
                    <p>Professor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="review-slider-item">
                <div className="review-text">
                  <p>
                    It's okay that the projects that I passed on to him and the
                    development of our Daniel's coffee are the same as the ones
                    we designed and that we achieved what was needed in the
                    requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
