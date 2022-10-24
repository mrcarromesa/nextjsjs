export interface IMediaElement {
  getSrc: () => string;
  play: () => void;
  pause: () => void;
  src: (src: string) => void;
  currentTime: () => number;
  getControl: () => boolean;
}