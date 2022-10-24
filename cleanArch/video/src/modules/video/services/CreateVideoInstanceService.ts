import { IVideoGateway } from '../domain/gateways/IVideoGateway';
import { Video } from '../domain/Video';

export class CreateVideoInstanceService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private videoGateway: IVideoGateway) {}

  execute(): Video {
    console.log('Execute');
    return this.videoGateway.create(); 
  }
}
