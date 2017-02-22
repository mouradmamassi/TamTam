//Be sure that your page is add to the app.module.ts ;)
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorksPage} from "../works/works";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  gotoWorksPage(){
    this.navCtrl.push(WorksPage);
  }
}
