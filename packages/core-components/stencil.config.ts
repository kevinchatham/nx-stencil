import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
import tailwind from 'stencil-tailwind';

export const config: Config = {
  namespace: 'core-components',
  taskQueue: 'async',
  plugins: [sass(), tailwind()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@web-components/core-components',
      proxiesFile:
        '../../../packages/core-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@web-components/core-components',
      directivesProxyFile:
        '../../../packages/core-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/core-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
};
