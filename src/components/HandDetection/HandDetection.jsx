import { Hands } from '@mediapipe/hands'
import React, { useEffect, useRef, useState } from 'react'
import * as cam from '@mediapipe/camera_utils'
import * as draw from '@mediapipe/drawing_utils'
import Webcam from 'react-webcam'

function HandDetection() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [pos, setPos] = useState({x: 0, y: 0})
  
  let camera = null

  const onResults = (results) => {
    // const video = webcamRef.current.video;
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
      if(results.multiHandLandmarks[0]){
        setPos({
          x: results.multiHandLandmarks[0][20].x,
          y: results.multiHandLandmarks[0][20].y 
        })
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
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div>
      <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
    </div>
  )
}

export default HandDetection
