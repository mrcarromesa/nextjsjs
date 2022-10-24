import { VideoJsPlayer } from 'video.js';
import { IMediaElement } from '../../domain/interfaces/IMediaElement';

export class VideoJSAdapter {
  static adapter (videoJSInstance: VideoJsPlayer): IMediaElement { 
    const mediaElement: IMediaElement = {
      getSrc: () => videoJSInstance.src(),
      getControl: () => videoJSInstance.controls(),
    } as IMediaElement;

    /**
     * The difference is that Object.assign changes the object in-place, 
     * while the spread operator (...) creates a brand new object, and this will break object reference equality.
     */
    Object.assign(videoJSInstance, {...mediaElement});
    
    return videoJSInstance as unknown as IMediaElement;
  }
} 