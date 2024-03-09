import React ,{ useState }from "react";
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
import video from '../assets/convocation.mp4';
import ppsu15 from "../assets/ppsu15.jpg";
import amit from "../assets/amit.jpg";
import holi from "../assets/holi.jpg";
import navratri from "../assets/night.jpg";
import styled from 'styled-components';
import Navbar from "../components/Navbar";


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

function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    <Container>
          <Navbar isScrolled={isScrolled} />
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
        `}
      </style>

      <div className="w-3/4 m-auto">
        <div className="mt-20 slick-container">
          <Slider {...settings}>
            {data.map((d , index) => (
            <div key={index} className='slick-slide'>

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
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
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

const videoRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];
const Container = styled.div``;

export default Movies;
