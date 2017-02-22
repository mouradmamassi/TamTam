import { Component } from '@angular/core';
import { BluetoothSerial } from 'ionic-native';

import { NavController } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';


@Component({
  selector: 'page-works',
  templateUrl: 'works.html'
})
export class WorksPage {

  constructor(public navCtrl: NavController) {
    
  }
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
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
    BluetoothSerial.list();
    this.devices = BluetoothSerial.list();
    this.devices.then(function(device){
      this.list.push(device)
    });
    this.navCtrl.push(DevicesPage,{
      'list' : this.list
    });
    //console.log(BluetoothSerial.list());



  }

}
