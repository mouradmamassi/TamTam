import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {WorksPage} from "../pages/works/works";
import {DevicesPage} from "../pages/devices/devices";
import {LaunchsPage} from "../pages/launchs/launchs";
import {CollectionsPage} from "../pages/collections/collections";
import {PaletConfigPage} from "../pages/paletconfig/paletconfig";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WorksPage,
    DevicesPage,
    LaunchsPage,
    CollectionsPage,
    PaletConfigPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WorksPage,
    DevicesPage,
    LaunchsPage,
    CollectionsPage,
    PaletConfigPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
