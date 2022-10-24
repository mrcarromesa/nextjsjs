export interface IMediaDetail {
  id: string;
  title?: string;
  description?: string;
}

export interface IVideoDTO {
  currentMedia: IMediaDetail;
  nexMedia: IMediaDetail;
  src: string;
  startInTime?: number;
  autoPlay?: boolean;
  autoNext?: boolean;
}
