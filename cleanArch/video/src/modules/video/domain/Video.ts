import { IMediaElement } from "./interfaces/IMediaElement";

export interface IVideoData {
  src: string;
}

export class Video {

  constructor(private mediaElement: IMediaElement) {}

  play() {
    this.mediaElement.play();
  }

  pause() {
    this.mediaElement.pause();
  }


  currentTime() {
    this.mediaElement.currentTime();
  }

  getSrc() {
    return this.mediaElement.getSrc();
  }

  getControl() {
    return this.mediaElement.getControl();
  }
}
