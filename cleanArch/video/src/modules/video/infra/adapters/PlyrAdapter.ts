import Plyr from 'plyr';
import { IMediaElement } from '../../domain/interfaces/IMediaElement';

export class PlyrAdapter {
  static adapter (videoInstance: Plyr): IMediaElement { 
    const mediaElement: IMediaElement = {
      getSrc: () => videoInstance.source.sources[0].src,
      getControl: () => !!videoInstance.elements.controls,
      currentTime: () => videoInstance.currentTime,
    } as IMediaElement;

    /**
     * The difference is that Object.assign changes the object in-place, 
     * while the spread operator (...) creates a brand new object, and this will break object reference equality.
    */
    Object.assign(videoInstance, {...mediaElement});
    
    return videoInstance as unknown as IMediaElement;
  }
} 