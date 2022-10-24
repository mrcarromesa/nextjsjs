import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import { Video } from '../modules/video/domain/Video';
import { FrameworksSupported, VideoFactory } from '../modules/video/infra/factories'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const router = useRouter();
  
  const [framework, setFramework] = useState<FrameworksSupported | null>(null);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const videoVod = useRef<Video|null>(null);

  useEffect(() => {
    setFramework(router.query?.player as FrameworksSupported);
  }, [router]);
  
  useEffect(() => {

    if (!framework || !videoRef.current) {
      return;
    }

    const videoInstance = new VideoFactory(framework);
    videoVod.current = videoInstance.vod({
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video',
      element: videoRef.current,
      options: {
        autoplay: false,
      }
    });
    videoInstance.css();

  }, [framework]);

  const handlePlay = useCallback(() => {
    videoVod.current?.play();
  }, []);
  
  const handlePause = useCallback(() => {
    videoVod.current?.pause();
  }, []);

  const handleChangeFramework = useCallback((frameworkOption: FrameworksSupported) => {
    // force reload:
    window.location.href = `/?player=${frameworkOption}`;
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Escolha o Framework:</h1>
        <ul>
          {Object.keys(FrameworksSupported).map(item => (
            <li key={item}>
              <button type="button" onClick={() => handleChangeFramework(item as FrameworksSupported)}>{item}</button>
            </li>

          ))}
        </ul>

        <h2>Controls</h2>
        <button type="button" onClick={handlePlay}>Play</button>
        <button type="button" onClick={handlePause}>Pause</button>
      </div>
      <div style={{position: 'relative', marginTop: 20, width: 960, height: 400}}>
        <video controls ref={videoRef} />
      </div>
    </div>
  )
}

export default Home
