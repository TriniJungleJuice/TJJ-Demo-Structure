import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const VideoBlock = ({ imgSrc,date,title }) => {
  return (
      <div className="video-block">
        <div className="video-thumb position-relative thumb-overlay">
          <a href="#">
            <img
              alt=""
              src={imgSrc ? imgSrc : "https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"}
              style={{
                width: "100%",
                height: "300px",
              }}
            />
          </a>
          <div className="box-content">
            <ul className="icon">
              <li>
                <a>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
                {/* <a href="watch-movie.html"><i className="fas fa-play"></i></a> */}
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-info">
          <div className="label-text">{date}</div>
        </div>
        </div>
        <div className="video-title">
            <a href="">{title}</a>
          </div>
      </div>
  );
};

{
  /* <div className="video-content">
          <h2 className="video-title">
            <a href="movie-single.html">Iron door</a>
          </h2>
          <div className="video-info d-flex align-items-center">
            <span className="video-year">2021</span>
            <span className="video-age">+18</span>
            <span className="video-type">Action</span>
          </div>
        </div> */
}

export default VideoBlock;
