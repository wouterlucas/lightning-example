/**
 * Main application
 */

import { Lightning, Router } from "@lightningjs/sdk";
import { routes } from './routes';


export class App extends Lightning.Application {
    static getFonts() {
        return [
            // {family: 'Bold', url: Utils.asset('fonts/LondrinaSolid-Regular.ttf'), descriptors: {}},
            // {family: 'Regular', url: Utils.asset('fonts/Fresca-Regular.ttf'), descriptors: {}}
        ];
    }

    override _setup() {
        Router.startRouter(routes, this);
    }

}
