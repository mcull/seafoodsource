// Gatsby supports TypeScript natively!
import React, {useState} from "react"
import { PageProps, Link } from "gatsby"
import Webcam from "react-webcam";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Menu = (props: PageProps) => {
  console.log(props);
  const videoConstraints = {
    width: 720,
    height: 720,
    facingMode: "user"
    //facingMode: { exact: "environment" }
  };

  const spinner = () => {
    return (
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    )
  }

  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [photo, setPhoto] = useState<string | null>(null);
    const capture = React.useCallback(
      () => {
        const imageSrc = (webcamRef.current as any)?.getScreenshot();
        setPhoto(imageSrc);
      },
      [webcamRef]
    );

    React.useEffect(
      () => {
        const devices = navigator.mediaDevices.enumerateDevices().then((devices) => console.log(devices));

      });

    return (
      <>
      <div className="w-full">
        <div> {photo == null ? <button className="my-2 rounded-full bg-indigo-50 p-3 text-indigo-900 font-bold" onClick={capture}>📷 Capture photo</button> : 
                               <button className="my-2 p-2 rounded-full bg-indigo-50 text-indigo-900 font-bold" onClick={() => {setPhoto(null)}}>🚫 Clear photo</button>
        }</div>
        <div>{photo && (<><div className="flex">{spinner()}<span>Processing photo... (not really) </span></div><br/><img src={photo}/></>)}</div>
        <div>{!photo && typeof window !== "undefined" && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        )}</div>
      </div>
      </>
    );
  };
  return(
    <Layout>
      <SEO title="Page two" />
      {WebcamCapture()}
    </Layout>
  )}

export default Menu
