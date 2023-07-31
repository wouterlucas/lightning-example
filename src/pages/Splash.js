import { Lightning, Router, Utils } from "@lightningjs/sdk";

export class Splash extends Lightning.Component {

    static _template(){
        return {
            rect: true, w: 1280, h: 720,
            color: 0XFF000000,
            Logo: {
                mount: 0.5, x: 620, y: 340,
                alpha: 1,
                src: "./img/logo.png", scale: 0.3
            }
        }
    }

    _init(){

        const Logo = this.tag("Logo");
        const _logoAnimation = Logo.animation({
            duration: 3, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'alpha', v: {0: 0, 0.5: 0.5, 1: 1}},
            ]
        })

        _logoAnimation.start();
        _logoAnimation.on('finish', () => {
            Router.navigate("home");
        });

    }


}