import Plyr from 'plyr';
import videojs, { VideoJsPlayerOptions } from 'video.js';
import { Video } from '../../domain/Video';
import { CreateVideoInstanceService } from '../../services/CreateVideoInstanceService';
import { PlyrGateway } from '../gateways/Plyr';
import { VideoJSGateway } from '../gateways/VideoJSGateway';
// import 'src/modules/video/infra/css/plyr';

export enum FrameworksSupported {
  videojs = 'videojs',
  plyr = 'plyr',
}

export interface IFrameworkProps {
  src: string;
  type: 'video' | 'audio',
}

interface IVideoJSFrameworkProps extends IFrameworkProps {
  element: string | HTMLElement;
  options?: VideoJsPlayerOptions;
  callback?: () => void;
}

interface IPlyrFrameworkProps extends IFrameworkProps {
  element: string | HTMLElement;
  options?: Plyr.Options;
}

type FrameworkProps = IVideoJSFrameworkProps | IPlyrFrameworkProps;

export type Frameworks = {
  [key in FrameworksSupported]: (props: FrameworkProps) => Video;
};

export type FrameworksCss = {
  [key in FrameworksSupported]: () => Promise<unknown>;
};

const frameworks: Frameworks = {
  videojs: (props: FrameworkProps) => {
    const parsedProps = props as IVideoJSFrameworkProps;

    const playerInstance = videojs(parsedProps.element, { sources: [{
      src: props.src,
    }], ...parsedProps.options}, parsedProps.callback);

    const playerGateway = new VideoJSGateway(playerInstance);
    return new CreateVideoInstanceService(playerGateway).execute();
  },

  plyr: (props: FrameworkProps) => {
    const parsedProps = props as IPlyrFrameworkProps;
    const playerInstance = new Plyr(parsedProps.element, parsedProps.options);
    playerInstance.source = {
      sources: [{
        src: props.src,
      }],
      type: props.type,
    }
    const playerGateway = new PlyrGateway(playerInstance);
    return new CreateVideoInstanceService(playerGateway).execute();
  }
};

const frameworksCss: FrameworksCss = {
  plyr: () => import('src/modules/video/infra/css/plyr'),
  videojs: () => import('src/modules/video/infra/css/videojs'),
}

export class VideoFactory {
  // eslint-disable-next-line no-useless-constructor
  constructor(public framework: FrameworksSupported) {}

  css() {
    return frameworksCss[this.framework]();
  }

  vod(props: FrameworkProps) {
    return frameworks[this.framework](props);
  }
}
