import { Component } from '@angular/core';
// import { BLE } from 'ionic-native';

import { NavController, AlertController } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';



@Component({
  selector: 'page-works',
  templateUrl: 'works.html'
})
export class WorksPage {


  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
  }
  slides = [
    {
      title: "Bienvenue sur TAMTAM!",
      description: "Le nouvel outil créatif connecté pour jouer ensemble.",
      image: "assets/img/bienvenue.jpg",
    },
    {
      title: "",
      description: "Poser un Palet",
      image: "assets/img/poser_un_palet.gif",
    },
    {
      title: "Contrôler",
      description: "",
      image: "assets/img/controler.gif",
    },
    {
      title: "Composer",
      description: "",
      image: "assets/img/composer.gif",
    }
  ];
  public  devices;
  public  list = [];

  enableBluetooth() {
    // BluetoothSerial.enable(
    //     function () {
    //       alert("Bluetooth is enabled");
    //     },
    //     function () {
    //       alert("The user did *not* enable Bluetooth");
    //     }
    // );
    // BluetoothSerial.showBluetoothSettings();
    // BluetoothSerial.enable();
    // BluetoothSerial.list();
    // this.devices = BluetoothSerial.list();
    // this.devices.then(function(device){
    //   this.list.push(device)
    // });
    var alert = this.alertCtrl.create({
      title: 'Bluetooth',
      subTitle: 'You must Enable Your Bluetooth',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(DevicesPage);
    //console.log(BluetoothSerial.list());




  }

  slideend(slide, index) {
    slide.slideTo(index, 500);
  }

}
