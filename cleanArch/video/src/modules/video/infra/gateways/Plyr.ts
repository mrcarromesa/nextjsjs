import Plyr from 'plyr';
import { IVideoGateway } from '../../domain/gateways/IVideoGateway';
import { Video } from '../../domain/Video';
import { PlyrAdapter } from '../adapters/PlyrAdapter';

export class PlyrGateway implements IVideoGateway {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly videoInstance: Plyr) {}

  create(): Video {
    
    const adapter = PlyrAdapter.adapter(this.videoInstance);
    const videoInterface = new Video(adapter);
    return videoInterface;
  }
}
