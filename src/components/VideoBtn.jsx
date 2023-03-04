import React, { useState } from "react";
import styled from "styled-components";

const VideoBtn = () => {
  const [play, setPlay] = useState(false);

  return (
    <Wrapper>
      <div className="button">
        <button onClick={() => setPlay(!play)} className="btn-watch">
          {!play ? (
            <i className="fa-solid fa-circle-play"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
        <p>Watch Video</p>
      </div>
      {play ? (
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/VWyqfkZwMaY"
            title="Bootstrap5 Tutorial 25 "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .button {
    display: flex;
    align-content: center;
    .btn-watch {
      border: none;
      background: #d0df56;
      margin-left: 20px;
      border-radius: 50%;
      width: 58px;
      padding: 5px;
      color: #062a4d;
      animation: watchAnim 2s linear infinite;
      i {
        font-size: 45px;
      }
      @keyframes watchAnim {
        0% {
          box-shadow: 0 0 0 0 #cee7ff;
        }
        50% {
          box-shadow: 0 0 15px -1px #cee7ff;
        }
        100% {
          box-shadow: 0 0 0 0 #cee7ff;
        }
      }
    }
    p {
      color: #d0df56;
      margin: auto 0;
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .video {
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 3;
    padding: 10px;
    iframe {
      border-radius: 10px;
      border: 3px solid #d0df56;
      width: 450px;
      height: 255px;
    }
  }
`;
export default VideoBtn;
