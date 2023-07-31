// we import all the pages that we want to add to our app
import {
    Home, Splash, Error, NotFound,
} from './pages';

export const routes = {
    root: 'Splash',
    routes: [
        {
            path: 'home',
            component: Home,
        },
        {
            path: '*',
            component: NotFound,
        },
        {
            path: '!',
            component: Error
        },
        {
            path: '$',
            component: Splash
        }
    ]
}
