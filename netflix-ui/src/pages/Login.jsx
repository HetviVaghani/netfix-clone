import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Background from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/netflix");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>LIGHTS,CAMERA,STREAM:</h1>
            <h4>Your Gateway to Cinematic Bliss!</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />

            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
            
          </div>
          {showPassword && <button onClick={handleLogin}>Log in </button>}
          
          <p>Design by student of PPSU Smit Hetvi KHushi <br /> you can checkout the link of University </p>
          <a className="link" href="http://127.0.0.1:5500/project/indext.html" target="_blank" rel="noopener noreferrer">Visit My Local Website</a>
        </div>

      </div>
      
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          font-size: 50px;
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
          a{
            font-color: white;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }

        {
          text-decoration:none;
          color: white;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }

`;

export default Login;
