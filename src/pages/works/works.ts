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
      image: "assets/img/page1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/poser_un_palet.gif",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/controler.gif",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
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
