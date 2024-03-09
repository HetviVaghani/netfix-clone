import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import sanam from "../assets/sanam.png";
import ppsu from "../assets/download.jpg";
import sunburn from "../assets/sunburn.png";
import darshan from "../assets/darshan.png";
import diwali from "../assets/diwali.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../assets/convocation.mp4";
import ppsu15 from "../assets/ppsu15.jpg";
import amit from "../assets/amit.jpg";
import holi from "../assets/holi.jpg";
import navratri from "../assets/night.jpg";
import { useNavigate } from "react-router-dom";
import ModalVideo from "react-modal-video";
import styled from "styled-components";
// horror
import shapit from "../assets/shapit.jpg";
import bhutpolice from "../assets/bhotpolice.jpg";
import atma from "../assets/aatma.jpg";
import nine from "../assets/1920.jpg";
import bhul2 from "../assets/bhul2.jpg";

import SHAPIT from "../assets/shapit.mp4";
import ATMA from "../assets/ghost.mp4";
import NINE from "../assets/1920.mp4";
import BHUL12 from "../assets/bhulbhulaiya2.mp4";

// sci-fi
import robot from "../assets/robot2.jpg";
import raone from "../assets/raone2.jpg";
import attack from "../assets/atk.jpg";
import creat from "../assets/creacher.jpg";

import ROBOT from "../assets/robot.mp4";
import RAONE from "../assets/raone.mp4";
import ATTACK from "../assets/attack.mp4";
import CREAT from "../assets/creacher.jpg";

const sliderImages = [
  {
    url: ppsu,
  },
  {
    url: darshan,
  },
  {
    url: sunburn,
  },
  {
    url: sanam,
  },
];
const sci_fi = [
  {
    img: robot,
    video: ROBOT,
  },
  {
    img: attack,
    video: ATTACK,
  },
  {
    img: raone,
    video: RAONE,
  },
  {
    img: creat,
    video: CREAT,
  },
  {
    img: robot,
    video: ROBOT,
  },
];
const horror = [
  {
    img: shapit,
    video: SHAPIT,
  },
  {
    img: bhutpolice,
    video: BHUL12,
  },
  {
    img: atma,
    video: ATMA,
  },
  {
    img: nine,
    video: NINE,
  },
  {
    img: bhul2,
    video: BHUL12,
  },
];

const slideContainerStyle = {
  Width: "800px",
  margin: "0 auto",
};

const slideImageContainerStyle = {
  position: "relative",
  height: "500px" /* Adjust as needed */,
  overflow: "hidden",
  marginBottom: "20px",
};

const slideImageStyle = {
  width: "100%",
  height: "700px",
  display: "block",
  transition: "transform 0.5s ease",
};

const dataStyle = {
  width: "100%",
};

function PPSU() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [watchList, setWatchList] = useState([]); // State to hold the list of watched videos

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleImageClick = (videoUrl, imgUrl) => {
    // Add the clicked video to the watch list
    setWatchList([...watchList, { videoUrl, imgUrl }]);
    // Navigate to the list page
    navigate("/MyList", {
      state: { watchList: [...watchList, { videoUrl, imgUrl }] },
    });
  };

  const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleHover = (isHovering, videoRef) => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };
  return (
    <>
      <div style={slideContainerStyle}>
        <Fade>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <div style={slideImageContainerStyle}>
                <img
                  src={image.url}
                  alt={image.caption}
                  style={slideImageStyle}
                />
                {/* <span style={slideCaptionStyle}>{image.caption}</span> */}
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <style>
        {`
        .heading-2{
          font-size:30px;
          margin-top:50px;
          margin-left:120px;
        }
        .slick-slide {
          margin: 0;
          padding: 0; 
          margin-top: 30px;
        }
        
.slick-container {
margin: 0 23px;
}

.slick-slide > div {
padding: 0 50px; 
}

.slick-slide img {
width: calc(100% + 40px);
height: calc(100% + 50px);
object-fit: cover; /* Maintain aspect ratio and cover the entire container */
border-radius: 8px; /* Add rounded corners */
}

.video-container {
position: absolute; /* Position the video container */
top: 0;
left: 0;
width: 100%;
height: 100%;
display: none; /* Hide the video container by default */
}

.slick-slide:hover .video-container {
display: block; /* Show the video container on hover */
}
      
.video-container video {
width: 100%;
height: 100%;
object-fit: contain; /* Maintain aspect ratio and cover the entire container */
border-radius: 8px; /* Add rounded corners */
}


.heart-button {
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px; /* Adjust size as needed */
  color: white; /* Set color to white */
  transition: transform 0.3s;
}

.heart-button:hover {
  transform: scale(1.2);
}

      `}
      </style>
      <div className="heading-2"><b>PPSU</b></div>
      <div className="w-3/4 m-auto">
        <div className="mt-20 slick-container">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="slick-slide">
                <div
                  className="bg-white h-[450px] text-black rounded-xl"
                  style={dataStyle}
                  onMouseEnter={() => handleHover(true, videoRefs[index])}
                  onMouseLeave={() => handleHover(false, videoRefs[index])}
                >
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img
                        src={d.img}
                        alt=""
                        className="h-44 w-44 rounded-full"
                      />
                      <div className="video-container">
                        <video
                          ref={(ref) => (videoRefs[index] = ref)}
                          src={video}
                          autoPlay
                          loop
                          muted
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* slider 3 */}
      <div className="heading-2"><b>sci-fi</b></div>
      <div className="w-3/4 m-auto">
        <div className="mt-20 slick-container">
          <Slider {...settings}>
            {sci_fi.map((d, index) => (
              <div key={index} className="slick-slide">
                <div>
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}
                    onClick={() => openModal(d.video)} // Use openModal to open video modal
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img
                        src={d.img}
                        alt=""
                        className="h-44 w-44 rounded-full"
                      />
                      <button
                        className="heart-button"
                        onClick={() => handleImageClick(d.video, d.img)}
                      >
                        &#10084;
                      </button>

                      {hoveredIndex === index && (
                        <div className="video-container"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* slider 4 */}
      <div className="heading-2"><b>Horror</b></div>
      <Container className="w-3/4 m-auto">
        <div className="mt-20 slick-container">
          <Slider {...settings}>
            {horror.map((d, index) => (
              <div key={index} className="slick-slide">
                <div>
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}
                    onClick={() => openModal(d.video)} // Use openModal to open video modal
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img
                        src={d.img}
                        alt=""
                        className="h-44 w-44 rounded-full"
                      />
                      <button
                        className="heart-button"
                        onClick={() => handleImageClick(d.video, d.img)}
                      >
                        &#10084;
                      </button>

                      {hoveredIndex === index && (
                        <div className="video-container"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <ModalVideo
          channel="custom"
          isOpen={isOpen}
          url={videoUrl}
          onClose={() => closeModal()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Container>
    </>
  );
}

const data = [
  {
    img: diwali,
  },
  {
    img: navratri,
  },
  {
    img: ppsu15,
  },
  {
    img: amit,
  },
  {
    img: holi,
  },
];
const Container = styled.div``;

const videoRefs = [
  React.createRef(),
  React.createRef(),
  React.createRef(),
  React.createRef(),
  React.createRef(),
];

export default PPSU;
