/**
 * Main entry point for the application.
 */

import fontLoader from './utils/fontLoader';
import styling from './utils/styling'
import { App } from './App'

// apply CSS styling
styling();

const options = {
    stage: {
        w: 1280,
        h: 720,
        clearColor: 0xFF000000,
        canvas2d: false,
        useImageWorker: true,
        pauseRafLoopOnIdle: true,
    },
    debug: false,
}

const fonts = [
    // {family: 'regular', url: './Roboto-Regular.ttf', descriptors: {}}
]

fontLoader(fonts).then(() => {
    const app = new App(options);
    document.body.appendChild(app.stage.getCanvas());
})


