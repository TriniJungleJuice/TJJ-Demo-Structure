const VideoBlock = () => {
    return (
      <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
        <div className="video-block">
          <div className="video-thumb position-relative thumb-overlay">
            <a href="#">
              <img alt="" className="img-fluid" src="images/latest-aditions/01.jpg" />
            </a>
            <div className="box-content">
              <ul className="icon">
                <li>
                  <a href="watch-movie.html"><i className="fas fa-play"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fas fa-plus"></i></a>
                </li>
                <li>
                  <a href="movie-single.html"><i className="fas fa-info"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="video-content">
            <h2 className="video-title"><a href="movie-single.html">Iron door</a></h2>
            <div className="video-info d-flex align-items-center">
              <span className="video-year">2021</span>
              <span className="video-age">+18</span>
              <span className="video-type">Action</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoBlock;