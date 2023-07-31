import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";

export interface SplashTemplateSpec extends Lightning.Component.TemplateSpec {
    Logo: object;
}


export class Splash extends Lightning.Component<SplashTemplateSpec, PageType> {

    Logo = this.getByRef('Logo')!;
    _logoAnimation: any;

    static override _template(){
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

    override _init(){
        this._logoAnimation = this.animation({
            duration: 3, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'Logo.alpha' as '$$number', v: {0: 0, 0.5: 0.5, 1: 1}},
            ]
        })

        this._logoAnimation.start();
        this._logoAnimation.on('finish', () => {
            Router.navigate("home");
        });

    }


}