import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SpeakerFilterPage } from './pages/speaker-filter/speaker-filter.page';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinistriesPage } from './pages/ministries/ministries.page';
import {AccountPage} from './pages/account/account';
import { AuxiliaryPage } from './pages/auxiliary/auxiliary.page';
import { ModalPagePage } from './pages/modal-page/modal-page.page';
import { DashboardPopoverPage } from './pages/dashboard-popover/dashboard-popover.page';

import { MyNetworkPage } from './pages/my-network/my-network.page'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordPage } from './pages/resetpassword/resetpassword.page';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, DashboardPopoverPage, SpeakerFilterPage],
  providers: [
    InAppBrowser, SplashScreen, StatusBar, 
    MinistriesPage,
    AuxiliaryPage,
    AccountPage,
    ModalPagePage,
    MyNetworkPage,
    ResetpasswordPage
  ],
  entryComponents: [DashboardPopoverPage, SpeakerFilterPage],
  
  bootstrap: [AppComponent]
})


export class AppModule {}
