import { IMediaElement } from "./interfaces/IMediaElement";

export interface IVideoData {
  src: string;
}

export class Video implements IMediaElement {

  constructor(private mediaElement: IMediaElement) {}
  
  src(src: string) {
    this.mediaElement.src(src);
  };

  play() {
    this.mediaElement.play();
  }

  pause() {
    this.mediaElement.pause();
  }


  currentTime() {
    return this.mediaElement.currentTime();
  }

  getSrc() {
    return this.mediaElement.getSrc();
  }

  getControl() {
    return this.mediaElement.getControl();
  }
}
