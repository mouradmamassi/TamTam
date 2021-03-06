webpackJsonp([0],{

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_works__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotoWorksPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__works_works__["a" /* WorksPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/home/home.html"*/'<ion-content class="page-home">\n    <div class="startcenter">\n        <h1>\n            TamTam\n        </h1>\n    </div>\n    <div class="buttonconnect">\n        <button (click)="gotoWorksPage()" ion-button color="light" outline>Start</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorksPage = (function () {
    function WorksPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.slides = [
            {
                title: "Bienvenue sur TAMTAM!",
                description: "Le nouvel outil créatif connecté pour jouer ensemble.",
                image: "assets/img/works/bienvenue.jpg",
            },
            {
                title: "",
                description: "Poser un Palet",
                image: "assets/img/works/poser_un_palet.gif",
            },
            {
                title: "Contrôler",
                description: "",
                image: "assets/img/works/controler.gif",
            },
            {
                title: "Composer",
                description: "",
                image: "assets/img/works/composer.gif",
            }
        ];
        this.list = [];
        this.alertCtrl = alertCtrl;
    }
    WorksPage.prototype.enableBluetooth = function () {
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
            subTitle: 'Activer le bluetouth',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
        //console.log(BluetoothSerial.list());
    };
    WorksPage.prototype.slideend = function (slide, index) {
        slide.slideTo(index, 500);
    };
    WorksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-works',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/works/works.html"*/'<ion-content class="tutorial-page">\n\n    <ion-slides pager #slidess>\n        <ion-slide *ngFor="let slide of slides">\n            <ion-toolbar>\n                <ion-buttons end>\n                    <button ion-button color="light" (click)="slideend(slidess,4)" >Skip</button>\n                </ion-buttons>\n            </ion-toolbar>\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n            <p [innerHTML]="slide.description"></p>\n            <img [src]="slide.image" class="slide-image"/>\n        </ion-slide>\n        <ion-slide >\n            <ion-toolbar>\n            </ion-toolbar>\n            <h2 class="slide-title">Jouer TamTam !!</h2>\n            <button (click)="enableBluetooth()" ion-button large clear icon-right color="primary">\n                Connecter\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/works/works.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WorksPage);
    return WorksPage;
}());
//# sourceMappingURL=works.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launchs_launchs__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicesPage = (function () {
    // public navParams: NavParams,
    function DevicesPage(navCtrl, alertCtrl, loadingCtrl) {
        // BLE.enable();
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.devices = [];
        // public isScanning = false ;
        this.msg = "";
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    DevicesPage.prototype.startScanning = function () {
        this.devices = [];
        // BLE.enable();
        this.msg = "";
        // BLE.startScan([]).subscribe(device => {
        //     console.log("Scanning Started");
        //     this.devices.push(device);
        // });
        var deviceone = {
            "name": "TAMTAM",
            "id": "BD922605-1B07-4D55-8D09-B66653E51BBA",
            "rssi": -79,
        };
        this.devices.push(deviceone);
        var loader = this.loadingCtrl.create({
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
    };
    DevicesPage.prototype.ConnectToDevice = function (deviceid) {
        console.log("Connect To Device");
        console.log(JSON.stringify(deviceid));
        // BLE.connect(deviceid).subscribe(peripheralData => {
        //     console.log(peripheralData.characteristics);
        //     // this.characteristics = peripheralData.characteristics;
        //     // this.connecting = false;
        // },
        // peripheralData => {
        //     console.log("disconnected");
        // });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__launchs_launchs__["a" /* LaunchsPage */]);
        // this.navCtrl.push(LaunchsPage);
    };
    DevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-devices',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/devices/devices.html"*/'<!--<ion-content class="devices-page">-->\n    <!--<ion-list>-->\n        <!--<ion-item *ngFor="let device of devices">-->\n            <!--Left Icon Button-->\n            <!--<button ion-button outline item-right icon-left>-->\n                <!--<ion-icon name="star"></ion-icon>-->\n                <!--Left Icon-->\n\n            <!--</button>-->\n        <!--</ion-item>-->\n        <!--<ion-item >-->\n            <!--Left Icon Button-->\n            <!--<button ion-button outline item-right icon-left>-->\n                <!--<ion-icon name="star"></ion-icon>-->\n                <!--Left Icon-->\n\n            <!--</button>-->\n        <!--</ion-item>-->\n    <!--</ion-list>-->\n<!--</ion-content>-->\n<ion-header>\n    <ion-navbar color="orangecolornavBar">\n        <ion-title>Connection Bluetooth</ion-title>\n        <ion-buttons end>\n            <button (click) = "startScanning()" ion-button>\n                <!--<ion-icon name="refresh-circle"></ion-icon>-->\n                <!--SCAN-->\n                <ion-icon name=\'refresh\'  md="md-refresh"></ion-icon>\n\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="orangecolorcontent">\n\n    <!--<ion-list inset>-->\n        <!--<ion-list-header>-->\n            <!--Language-->\n        <!--</ion-list-header>-->\n\n        <!--<ion-item *ngFor="let number of [0,1,2,3,4]">-->\n            <!--<ion-label>Go</ion-label>-->\n            <!--<ion-radio checked="false" value="go"></ion-radio>-->\n        <!--</ion-item>-->\n        <!--<ion-item *ngFor="let device of devices">-->\n            <!--<ion-label>{{device.name}}</ion-label>-->\n            <!--<button ion-item (click) = "ConnectToDevice(device.id)">-->\n\n                <!--&lt;!&ndash;<p>{{device.rssi}}</p>&ndash;&gt;-->\n            <!--</button>-->\n        <!--</ion-item>-->\n\n        <ion-list >\n            <button ion-item *ngFor="let  device of devices" (click) = "ConnectToDevice(device.id)" class="orangecolorcontent">\n                <h2>{{device.name}}</h2>\n                <p>{{device.id}}</p>\n            </button>\n        </ion-list>\n\n        <!--<ion-spinner *ngIf="isScanning==false"></ion-spinner>-->\n\n\n\n        <!--<ion-item>-->\n            <!--<ion-label>Rust</ion-label>-->\n            <!--<ion-radio value="rust"></ion-radio>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item>-->\n            <!--<ion-label>Python</ion-label>-->\n            <!--<ion-radio value="python"></ion-radio>-->\n        <!--</ion-item>-->\n    <!--</ion-list>-->\n    <!--<ion-spinner *ngIf="isScanning == true"></ion-spinner>-->\n    <ion-grid>{{msg}}</ion-grid>\n<!--<ion-spinner *ngIf=”isScanning==true” name=”circles”></ion-spinner>-->\n</ion-content>\n'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/devices/devices.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], DevicesPage);
    return DevicesPage;
}());
//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collections_collections__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paletconfig_paletconfig__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LaunchsPage = (function () {
    // public tab2;
    // tab3: any;
    // tab3: any;
    function LaunchsPage(navCtrl, menu, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        menu.enable(true);
        this.menuCtrl = menu;
        this.collection = __WEBPACK_IMPORTED_MODULE_2__collections_collections__["a" /* CollectionsPage */];
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
    LaunchsPage.prototype.openPage = function (p) {
        // this.rootPage = p;
        this.navCtrl.push(this.collection);
    };
    LaunchsPage.prototype.GoToPaletPage = function (num) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__paletconfig_paletconfig__["a" /* PaletConfigPage */], { "Num": num });
    };
    LaunchsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-launchs',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/launchs/launchs.html"*/'<ion-header >\n<ion-navbar hideBackButton color="orangecolornavBar">\n    <button ion-button menuToggle  icon-only  >\n        <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n        TAMTAM\n    </ion-title>\n</ion-navbar>\n</ion-header>\n\n<!--<ion-content padding>-->\n    <!--<button ion-button block menuToggle>Toggle Menu</button>-->\n    <!--&lt;!&ndash;<button ion-button menuToggle  icon-only >&ndash;&gt;-->\n         <!--&lt;!&ndash;<ion-icon name=\'menu\'></ion-icon>&ndash;&gt;-->\n    <!--&lt;!&ndash;</button>&ndash;&gt;-->\n<!--</ion-content>-->\n\n\n\n<ion-menu [content]="content" persistent="true">\n    <ion-header>\n        <ion-toolbar color="orangecolornavBar">\n            <ion-title> Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class="orangecolorcontent">\n        <ion-list inset>\n            <button ion-item (click)="openPage(collection)" class="orangecolorcontent">\n              <ion-icon name="apps" item-right></ion-icon>\n                Collection\n            </button>\n            <button ion-item (click)="openPage(signupPage)" class="orangecolorcontent">\n                Paramétre\n            </button>\n            <button ion-item (click)="openPage(signupPage)" class="orangecolorcontent">\n                Communauté\n            </button>\n            <button ion-item (click)="openPage(signupPage)" class="orangecolorcontent">\n                A Propos\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav"  #content [root]="rootPage"></ion-nav>\n<ion-content class="launchs">\n    <!--essayer de travaille avec les buttons en modefiant la forme comme cercle et aussi on le mettre dans un div sous forme d\'une cercle ;)-->\n    <div class="tamtamlaunchs">\n        <!--<button ion-button class="roundbutton" (click)="GoToPaletPage()">-->\n            <!--&lt;!&ndash;<ion-img src="assets/img/palet-3.png"></ion-img>&ndash;&gt;-->\n        <!--</button>-->\n        <div class="roundclick1">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(1)" src="assets/img/palets/palet-1.png"></ion-img>\n            </a>\n        </div>\n        <div class="roundclick2">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick3">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick4">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick5">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick6">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick7">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(3)" src="assets/img/palets/palet-3.png"></ion-img>\n            </a>\n        </div>\n        <div class="roundclick8">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick9">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(4)" src="assets/img/palets/palet-4.png"></ion-img>\n            </a>\n        </div>\n\n        <div class="roundclick10">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick11">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(5)" src="assets/img/palets/palet-5.png"></ion-img>\n            </a>\n        </div>\n        <div class="roundclick12">\n            <a>\n            </a>\n        </div>\n\n\n\n        <div class="roundclick13">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(6)" src="assets/img/palets/palet-6.png"></ion-img>\n            </a>\n        </div>\n        <div class="roundclick14">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(7)" src="assets/img/palets/palet-7.png"></ion-img>\n            </a>\n        </div>\n        <div class="roundclick15">\n            <a>\n                <ion-img class="imgradius" (click)="GoToPaletPage(8)" src="assets/img/palets/palet-8.png"></ion-img>\n            </a>\n        </div>\n\n        <div class="roundclick16">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick17">\n            <a>\n            </a>\n        </div>\n        <div class="roundclick18">\n            <a>\n            </a>\n        </div>\n\n        <div class="roundclick19">\n            <a>\n            </a>\n        </div>\n\n\n\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff3333">2</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #c61aff">3</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff4dff">4</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #66ffb3">5</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #3366ff">6</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #bf80ff">7</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #b3c6ff">8</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #ffffcc">9</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ffff66">10</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff80b3">11</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff0066">12</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #c2c2d6">13</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #9494b8">14</button>-->\n        <!--<button ion-button color="light" class="roundbutton" (click)="GoToPaletPage()" style="background: #ffcc99">15</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff4d94">16</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #ff3333">17</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #1aff1a">18</button>-->\n        <!--<button ion-button color="danger" class="roundbutton" (click)="GoToPaletPage()" style="background: #1aff8c">19</button>-->\n    </div>\n\n    <ion-fab right bottom>\n        <button ion-fab color="orangecolornavBar"><ion-icon name="share"></ion-icon></button>\n        <ion-fab-list side="left">\n            <button ion-fab color="orangecolornavBar"><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab color="orangecolornavBar"><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab color="orangecolornavBar"><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab color="orangecolornavBar"><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-content>\n\n\n\n<!--<ion-tabs selectedIndex="1">-->\n    <!--<ion-tab tabIcon="aperture" tabTitle="TAMTAM" [root]="tab1"></ion-tab>-->\n    <!--<ion-tab tabIcon="apps" tabTitle="Collection" [root]="tab2"></ion-tab>-->\n    <!--&lt;!&ndash;<ion-tab tabIcon="share" tabTitle="Share" (ionSelect)="chat()" ></ion-tab>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>&ndash;&gt;-->\n<!--</ion-tabs>-->\n\n<!--[root]="rootPage"-->\n'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/launchs/launchs.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LaunchsPage);
    return LaunchsPage;
}());
//# sourceMappingURL=launchs.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionsPage = (function () {
    function CollectionsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CollectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-collections',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/collections/collections.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Collections</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    Collection\n</ion-content>\n\n<!--<ion-tabs>-->\n    <!--<ion-tab tabIcon="apps" tabTitle="Collection" [root]="tab1"></ion-tab>-->\n    <!--<ion-tab tabIcon="share" tabTitle="Share" [root]="tab2"></ion-tab>-->\n    <!--&lt;!&ndash;<ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>&ndash;&gt;-->\n<!--</ion-tabs>-->'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/collections/collections.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CollectionsPage);
    return CollectionsPage;
}());
//# sourceMappingURL=collections.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaletConfigPage = (function () {
    function PaletConfigPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.num = this.params.get('Num');
        this.path = "assets/img/palets/palet-" + this.num + ".png";
    }
    PaletConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-paletconfig',template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/paletconfig/paletconfig.html"*/'<ion-header >\n    <ion-navbar color="orangecolornavBar">\n        <ion-title>\n            Réglage Palet\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="paletconfig">\n    <!--<ion-img ></ion-img>-->\n    <div class="paletimage">\n        <ion-img class="imgradius" src="{{path}}"></ion-img>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/pages/paletconfig/paletconfig.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaletConfigPage);
    return PaletConfigPage;
}());
//# sourceMappingURL=paletconfig.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(577);


// import {enableProdMode} from '@angular/core';
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
// enableProdMode(); 
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_works_works__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_devices_devices__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_launchs_launchs__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_collections_collections__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_paletconfig_paletconfig__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_works_works__["a" /* WorksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_launchs_launchs__["a" /* LaunchsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_paletconfig_paletconfig__["a" /* PaletConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_works_works__["a" /* WorksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_launchs_launchs__["a" /* LaunchsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_paletconfig_paletconfig__["a" /* PaletConfigPage */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { WorksPage } from '../pages/works/works';
var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/app/app.html"*/'<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mouradmamassi/Documents/TAMTAM Projet/TamTam/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[478]);
//# sourceMappingURL=main.js.map