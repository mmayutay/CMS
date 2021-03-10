import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MinistriesPage } from './pages/ministries/ministries.page';
import {AccountPage} from './pages/account/account';
import { AuxiliaryPage } from './pages/auxiliary/auxiliary.page';
import { ModalPagePage } from './pages/modal-page/modal-page.page';
// import { DashboardPopoverPage } from './pages/dashboard-popover/dashboard-popover.page';


import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    // MatPaginatorModule,
    // MatTableDataSource,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    NgxQRCodeModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [
    InAppBrowser, SplashScreen, StatusBar, 
    MinistriesPage,
    AuxiliaryPage,
    AccountPage,
    ModalPagePage,
    QRScanner
  ],
  // entryComponents: [DashboardPopoverPage],
  
  bootstrap: [AppComponent]
})


export class AppModule {}
