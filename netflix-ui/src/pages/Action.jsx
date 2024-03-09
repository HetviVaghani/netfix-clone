import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from '../assets/convocation.mp4';
import strange from '../assets/video.mp4';
import clg from '../assets/ppsu.mp4';
import { useNavigate } from "react-router-dom";
// action
import uri from "../assets/uri.png";
import yodha from "../assets/yodha.jpg";
import war from "../assets/war.png";
import singham from "../assets/singham.jpg";
import tanhaji from "../assets/tanhaji.png";

import URI from "../assets/uri.mp4";
import YODHA from "../assets/yodha.mp4";
import WAR from "../assets/war.mp4";
import SINGHAM from "../assets/singham.mp4";
import TANHAJI from "../assets/tanhaji.mp4";

// drama
import pink from "../assets/img3.jpg";
import happyending from "../assets/happyending.jpg";
import kapurandsons from "../assets/img2.jpg";
import ohmygod from "../assets/ohmygod.png";
import rrr from "../assets/rrr.jpg";

import PINK from "../assets/pink.mp4";
import HAPPYENDING from "../assets/happyending.mp4";
import KAPUR from "../assets/kapurandsons.mp4";
import OMG from "../assets/ohmygod.mp4";
import RRR from "../assets/rrr.mp4";

// comedy
import kmg from "../assets/koimilgaya.jpg";
import dhamal from "../assets/d.jpg";
import  dholl from "../assets/dholl.jpg";
import idiots from "../assets/3idiots.jpg";
import heraferi from "../assets/heraferi.jpg";

import KMG from "../assets/koimilgaya.mp4";
import DHAMAL from "../assets/dhamal.mp4";
import  DHOLL from "../assets/dholl.mp4";
import IDIOTS from "../assets/3idiots.mp4";
import HERAFERI from "../assets/heraferi.mp4";


const drama = [
  {
    img: kapurandsons,
    video: KAPUR,
  },
  {
    img: happyending,
    video: HAPPYENDING,
  },
  {
    img: ohmygod,
    video: OMG,
  },
  {
    img: rrr,
    video: RRR,
  },
  {
    img: pink ,
    video: PINK,
  },
];

const comedy = [
  {
    img: kmg,
    video:KMG,
  },
  {
    img: dholl,
    video:DHOLL,
  },
  {
    img: heraferi,
    video:HERAFERI,
  },
  {
    img: dhamal,
    video:DHAMAL,
  },
  {
    img: idiots,
    video:IDIOTS,
  },
];

const data = [
  {
    img: uri,
    video:URI,
  },
  {
    img: yodha,
    video:YODHA,
  },
  {
    img: singham,
    video:SINGHAM,
  },
  {
    img: war,
    video:WAR,
  },
  {
    img: tanhaji,
    video:TANHAJI,
  },
];

const dataStyle = {
  width: "100%",
};

function Action() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
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

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <style>
        {`
          .slick-slide {
            margin: 0;
            padding: 0; 
            margin-top: 70px;
          }
          .heading-2{
            font-size:30px;
            margin-top:100px;
            margin-left:120px;
            margin-bottom:-50px;
          }
          
          .slick-container {
            margin: 0 23px;
            
          }

          .slick-slide > div {
            padding: 0 50px; 
            margin-top: -15px;
            position: relative; /* Ensure positioning context for absolute positioning */
          }
          
          .heart-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }

          .slick-slide img {
            width: calc(100% + 40px);
            height: calc(100% + 50px);
            object-fit: cover; /* Maintain aspect ratio and cover the entire container */
            border-radius: 8px; /* Add rounded corners */
            transition: transform 0.3s;
            &:hover {
              transform: scale(1.2);
            }
          }
       
          .heart-button{
            position: absolute;
            top: 10px;
            right: 20px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 24px; /* Adjust size as needed */
            color: white; /* Set color to white */
            transition: transform 0.3s;
            &:hover{
              transform: scale(1.2);
            }
          }
        `}
      </style>
      <div className="heading-2"><b>Action</b></div>
      <div className="w-3/4 m-auto">
        <div className="mt-20 slick-container">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='slick-slide'>
                <div>
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}
                    onClick={() => openModal(d.video)} // Use openModal to open video modal
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                      <button className="heart-button"
                                              onClick={() => handleImageClick(d.video, d.img)} // Pass video and image URL to handleImageClick function
                                              >&#10084;</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

       {/* slider 2  */}
       <div className="heading-2"><b>Drama</b></div>
       <div className="w-3/4 m-auto">
         <div className="mt-20 slick-container">
           <Slider {...settings}>
             {drama.map((d, index) => (
              <div key={index} className='slick-slide'>
                <div>
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}                  
                    onClick={() => openModal(d.video)} // Use openModal to open video modal
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                      <button className="heart-button"
                                              onClick={() => handleImageClick(d.video, d.img)} // Pass video and image URL to handleImageClick function
                                              >&#10084;</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
       {/* slider3 */}
       <div className="heading-2"><b>Comedy</b></div>
       <div className="w-3/4 m-auto">
         <div className="mt-20 slick-container">
           <Slider {...settings}>
             {comedy.map((d, index) => (
              <div key={index} className='slick-slide'>
                <div>
                  <div
                    className="bg-white h-[450px] text-black rounded-xl"
                    style={dataStyle}
                    onClick={() => openModal(d.video)} // Use openModal to open video modal
                  >
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                      <button className="heart-button"
                                              onClick={() => handleImageClick(d.video, d.img)} // Pass video and image URL to handleImageClick function
                                              >&#10084;</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <ModalVideo
        channel='custom'
        isOpen={isOpen}
        url={videoUrl}
        onClose={() => closeModal()}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      />
    </Container>
  )
}

const Container = styled.div``;

export default Action;
