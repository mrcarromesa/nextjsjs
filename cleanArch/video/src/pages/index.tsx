import type { NextPage } from 'next'
import { useEffect, useRef, useCallback } from 'react'
import { Video } from '../modules/video/domain/Video';
import { FrameworksSupported, VideoFactory } from '../modules/video/infra/factories'
import styles from '../styles/Home.module.css'

const videoInstance = new VideoFactory(FrameworksSupported.videojs);

const Home: NextPage = () => {
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoVod = useRef<Video|null>(null);
  
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoVod.current = videoInstance.vod({
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      element: videoRef.current,
      options: {
        controls: false,
        sources: [{
          src: "https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8",
          type: "application/x-mpegURL"
        }]
      }
    });
  }, []);


  const handlePlay = useCallback(() => {
    videoVod.current?.play();
  }, []);


  return (
    <div className={styles.container}>
      <video ref={videoRef} />

    <button type="button" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 9999
    }} onClick={handlePlay}>Play</button>
    </div>
  )
}

export default Home
