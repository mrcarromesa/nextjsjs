import { VideoJsPlayer } from 'video.js';
import { IMediaElement } from '../../domain/interfaces/IMediaElement';

export class VideoJSAdapter {
  static adapter (videoInstance: VideoJsPlayer): IMediaElement { 
    const mediaElement: IMediaElement = {
      getSrc: () => videoInstance.src(),
      getControl: () => videoInstance.controls(),
    } as IMediaElement;

    /**
     * The difference is that Object.assign changes the object in-place, 
     * while the spread operator (...) creates a brand new object, and this will break object reference equality.
    */
    Object.assign(videoInstance, {...mediaElement});
    
    return videoInstance as unknown as IMediaElement;
  }
} 