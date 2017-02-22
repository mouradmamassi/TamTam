import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from 'ionic-native';

@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html'
})

export class DevicesPage{
    public list = [];




    constructor(public navParams: NavParams, public navCtrl: NavController, ){

        this.list = navParams.get('list');



    }



}