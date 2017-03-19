//Be sure that your page is add to the app.module.ts ;)
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorksPage} from "../works/works";

@Component({
    selector: 'page-paletconfig',
    templateUrl: 'paletconfig.html'
})
export class PaletConfigPage {
    public num;
    public path;

    constructor(public navCtrl: NavController, public params: NavParams) {
    this.num  = this.params.get('Num');
    this.path = "assets/img/palets/palet-" + this.num + ".png";


    }

}
