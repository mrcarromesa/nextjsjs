import { Video } from '../Video';

export interface IVideoGateway {
  create(): Video;
}
