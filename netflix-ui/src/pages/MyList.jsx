import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MyList() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const watchListFromState = location.state && location.state.watchList;
  const [watchList, setWatchList] = useState(watchListFromState || []);
  const navigate = useNavigate();

  useEffect(() => {
    // If watchList is passed from location state, update the state
    if (watchListFromState) {
      setWatchList(watchListFromState);
    }
  }, [watchListFromState]);

  const [activeVideo, setActiveVideo] = useState(null);

  const toggleVideo = (index) => {
    setActiveVideo(activeVideo === index ? null : index);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <LikedVideos>
        <div className="heading">Like List</div>
        <ul>
          {watchList.map((item, index) => (
            <li key={index}>
              <img
                src={item.imgUrl}
                alt="Liked video"
                onClick={() => toggleVideo(index)}
              />
              {activeVideo === index && (
                <Overlay>
                  <div className="player">
                    <div className="back">
                      <BsArrowLeft onClick={() => navigate(-1)} />
                    </div>
                    <video controls autoPlay loop muted>
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Overlay>
              )}
            </li>
          ))}
        </ul>
      </LikedVideos>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#fff" : "transparent"};
  z-index: 2; /* Ensure the navbar is above the video overlay */
  transition: background-color 0.3s ease-in-out;

  .heading {
    padding: 140px;
    padding-left: 90px;
    font-size: 25px;
    margin-bottom: 0;
  }
`;

const LikedVideos = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    position: relative;
    margin-bottom: 20px;
  }
  img {
    margin: 85px;
    width: 230px;
    height: 300px;
    cursor: pointer;
    margin-top: -100px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .player{
    width: 100vw;
    height: 100vh;
    .back{
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg{
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

