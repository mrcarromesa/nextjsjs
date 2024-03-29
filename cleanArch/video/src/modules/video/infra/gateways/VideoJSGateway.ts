import { VideoJsPlayer } from 'video.js';
import { IVideoGateway } from '../../domain/gateways/IVideoGateway';
import { Video } from '../../domain/Video';
import { VideoJSAdapter } from '../adapters/VideoJSAdapter';

export class VideoJSGateway implements IVideoGateway {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly videoInstance: VideoJsPlayer) {}

  create(): Video {
    const adapter = VideoJSAdapter.adapter(this.videoInstance);
    const videoInterface = new Video(adapter);
    return videoInterface;
  }
}
