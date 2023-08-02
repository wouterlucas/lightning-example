/**
 * Main application
 */

import { Lightning, Router } from "@lightningjs/sdk";
import { routes } from './routes';


export class App extends Lightning.Application {
    _setup() {
        Router.startRouter(routes, this);
    }
}
