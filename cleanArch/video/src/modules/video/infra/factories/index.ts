import videojs, { VideoJsPlayerOptions } from 'video.js';
import { Video } from '../../domain/Video';
import { CreateVideoInstanceService } from '../../services/CreateVideoInstanceService';
import { VideoJSGateway } from '../gateways/VideoJSGateway';

export enum FrameworksSupported {
  videojs = 'videojs',
}


export interface IFrameworkProps {
  src: string;
}

interface IVideoJSFrameworkProps extends IFrameworkProps {
  element: string | HTMLElement;
  options?: VideoJsPlayerOptions;
  callback?: () => void;
}

type FrameworkProps = IFrameworkProps | IVideoJSFrameworkProps;

export type Frameworks = {
  [key in FrameworksSupported]: (props: FrameworkProps) => Video;
};

const frameworks: Frameworks = {
  videojs: (props: FrameworkProps) => {
    const parsedProps = props as IVideoJSFrameworkProps;
    const videoJSInstance = videojs(parsedProps.element, parsedProps.options, parsedProps.callback);
    const videoJSGateway = new VideoJSGateway(videoJSInstance);
    return new CreateVideoInstanceService(videoJSGateway).execute();
  },
};

export class VideoFactory {
  // eslint-disable-next-line no-useless-constructor
  constructor(public framework: FrameworksSupported) {}

  vod(props: FrameworkProps) {
    return frameworks[this.framework](props);
  }
}
