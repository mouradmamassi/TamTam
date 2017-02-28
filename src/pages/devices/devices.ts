import { Component } from '@angular/core';
// , NavParams
import { NavController, AlertController, LoadingController} from 'ionic-angular';
import { BLE } from 'ionic-native';
import {LaunchsPage} from "../launchs/launchs";


@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html'
})

export class DevicesPage{
    public devices = [];
    // public isScanning = false ;
    public msg = "";



    // public navParams: NavParams,

    constructor( public navCtrl: NavController, private alertCtrl: AlertController, public loadingCtrl: LoadingController){
        // BLE.enable();

        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;

    }
    startScanning() {


        this.devices = [];

       // BLE.enable();
        this.msg = "";
        // BLE.startScan([]).subscribe(device => {
        //     console.log("Scanning Started");
        //     this.devices.push(device);
        // });

        var  deviceone = {
            "name": "TI SensorTag",
            "id": "BD922605-1B07-4D55-8D09-B66653E51BBA",
            "rssi": -79,

        };
        this.devices.push(deviceone);



            let loader = this.loadingCtrl.create({
                content: "Please wait...",
                duration: 3000
            });
            loader.present();


            //
            // var sucess = BLE.scan([], 3).subscribe(device => {
            //     console.log(JSON.stringify(device));
            //     this.devices.push(device);
            // });
            // BLE.isEnabled(sucess,alert);


        // BLE.startScan([]).subscribe(device => {
        //    console.log(JSON.stringify(device));
        //     this.devices.push(device);
        // });


        //     .subscribe(device => {
        //     this.devices.push(device);
        // });

        // BLE.startScan([]).subscribe(
        //     device => {
        //         console.log("Found device: " + JSON.stringify(device));
        //     },
        //     err => {
        //         console.log("Error occurred during BLE scan: " + JSON.stringify(err));
        //     },
        //     () => {
        //         console.log("End of devices...");
        //     }
        // );


        // setTimeout(() => {
        // BLE.stopScan().then(() => {
        // console.log("Scanning has stopped");
        // console.log(JSON.stringify(this.devices));
        //     var alert = this.alertCtrl.create({
        //         title: 'Bluetooth',
        //         subTitle: ' Check If Your Bluetooth is enable',
        //         buttons: ['OK']
        //     });
        //     if(this.devices.length == 0){
        //         this.msg = "No devices Found";
        //         alert.present();
        //     }
        //
        //  });
        // }, 5000);




    }

    ConnectToDevice(deviceid){

            console.log("Connect To Device");
            console.log(JSON.stringify(deviceid))
            // BLE.connect(deviceid).subscribe(peripheralData => {
            //     console.log(peripheralData.characteristics);
            //     // this.characteristics = peripheralData.characteristics;
            //     // this.connecting = false;
            // },
            // peripheralData => {
            //     console.log("disconnected");
            // });
            this.navCtrl.setRoot(LaunchsPage);
            // this.navCtrl.push(LaunchsPage);

    }


}