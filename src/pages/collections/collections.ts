//Be sure that your page is add to the app.module.ts ;)
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



@Component({
    selector: 'page-collections',
    templateUrl: 'collections.html'
})
export class CollectionsPage {


    constructor(public navCtrl: NavController) {

    }

}
