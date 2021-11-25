import { Hands } from '@mediapipe/hands'
import React, { useEffect, useRef, useState } from 'react'
import * as cam from '@mediapipe/camera_utils'
import * as draw from '@mediapipe/drawing_utils'
import Webcam from 'react-webcam'

import style from '../HandDetection/HandDetection.module.css'

function HandDetection({ setPosLeftHand, setPosRightHand }) {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  
  
  let camera = null

  const onResults = (results) => {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        draw.drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                       {color: '#00FF00', lineWidth: 5});
        draw.drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
      }
      for(let i = 0; i < results.multiHandedness.length; i++){
        if (results.multiHandedness[i].label === 'Left') {
          setPosLeftHand({
            x: results.multiHandLandmarks[i][11].x,
            y: results.multiHandLandmarks[i][11].y
          })
        } else {
          setPosRightHand({
            x: results.multiHandLandmarks[i][11].x,
            y: results.multiHandLandmarks[i][11].y
          })
        }
      }
    }
    canvasCtx.restore()
  }

  useEffect(() => {
    const hand = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });

    hand.setOptions({
      selfieMode: true,
      maxNumHands: 2,
      modelComplexity:1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hand.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hand.send({ image: webcamRef.current.video });
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }
  }, []);

  return (
    <div className={style.HandDetectionContainer}>
      <Webcam
          ref={webcamRef}
          style={{
            display: 'none',
            width: 1280,
            height: 720,
          }}
        />
      <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            textAlign: "center",
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        />
    </div>
  )
}

export default HandDetection
