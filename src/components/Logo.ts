import { Lightning } from "@lightningjs/sdk";

export class Logo extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {

    CanTouchThis = this.getByRef('CanTouchThis')!;
    _textAnimation: any;

    static override _template(){
        return {
            w: 1280, h: 720,
            rect: true, color: 0xFFFFFFF,
            zIndex: 2,
            Logo: {
                mount: 0.5, x: 620, y: 340,
                alpha: 1,
                src: "./img/logo.png", scale: 0.3
            }
        }
    }
}

