import { Lightning, Router } from "@lightningjs/sdk";

export class Error extends Lightning.Component {

    static _template(){
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFFF1465B,
            Header:{
                mount: 0.5, x: 960, y: 140,
                text:{
                    text:'Error', fontFace: "Bold", fontSize: 128
                }
            },
            Error: {
                mountX: 0.5, x: 960, y: 220,
                text: {text: "", fontFace: "Regular", textAlign: "center"}
            },
            Enter: {
                mountX: 0.5, x: 960, y: 980,
                text: {text: "press [enter] to navigate to Home Page", fontFace: "Regular"}
            }
        }
    }

    _handleEnter(){
        Router.navigate("home")
    }

    set params(args){
        const {request} = args;
        this.error = request;
    }


    set error(obj){
        this.Error = this.getByRef('Error');

        if(!obj.page){
            this.Error.text = obj.error;
        }else{
            const {page, error, hash, route} = obj;
            const errorMessage = `error while loading page: ${page.constructor.name}
        --
        loaded via hash: ${hash}
        resulted in route: ${route.path}
        --
        ${error.toString()}`
            this.Error.text = errorMessage;
        }
    }

}