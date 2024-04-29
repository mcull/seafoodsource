// Gatsby supports TypeScript natively!
import React, {useState} from "react"
import { PageProps, Link } from "gatsby"
import Webcam from "react-webcam";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Menu2 = (props: PageProps) => {
  console.log(props);
  const videoConstraints = {
    width: 720,
    height: 1280,
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
        <div>{!photo && (
        <Webcam
          audio={false}
          height={videoConstraints.height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}
        />
        )}</div>
      </>
    );
  };
  return(
    <Layout>
      <SEO title="Menu" />
      {WebcamCapture()}
    </Layout>
  )}

export default Menu2
