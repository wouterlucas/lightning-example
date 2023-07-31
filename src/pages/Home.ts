import { Lightning } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";
import { Logo } from "../components";

export class Home extends Lightning.Component<Lightning.Component.TemplateSpecLoose, PageType> {
    static override _template(){
        return {
            Background: {
                x: 0, y: 0, w: 1280, h: 720,
                src: "./img/background.png",
            },
            Logo: {
                type: Logo
            },
            LetsStartBuilding: {
                mount: 0.5, x: 620, y: 440,
                text: {text: "Hello World" }
            }
        }
    }


    override _init() {
        console.log('init home');
    }


}
