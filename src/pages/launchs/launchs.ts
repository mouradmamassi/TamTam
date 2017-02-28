import { Component } from '@angular/core';
// import { BLE } from 'ionic-native';

import { NavController, MenuController, ModalController } from 'ionic-angular';
import {DevicesPage} from "../devices/devices";
import {CollectionsPage} from "../collections/collections";
import {TamtamPage} from "../Tamtam/Tamtam";


@Component({
    selector: 'page-launchs',
    templateUrl: 'launchs.html'
})
export class LaunchsPage {

    public menuCtrl;
    // rootPage = LaunchsPage;
    public rootPage;
    public collection;
    // public tab2;
    // tab3: any;
    // tab3: any;

    constructor(public navCtrl: NavController, menu: MenuController, public modalCtrl: ModalController) {

        menu.enable(true);
        this.menuCtrl = menu;
        this.collection = CollectionsPage;
        // this.tab3 = CollectionsPage;


        // this.rootPage = LaunchsPage;
    }
    // chat() {
    //     let modal = this.modalCtrl.create(TamtamPage);
    //     modal.present();
    // }
    // toggleMenu() {
    //     this.menuCtrl.toggle();
    // }

    openPage(p) {
        // this.rootPage = p;
        this.navCtrl.push(this.collection);
    }
}

