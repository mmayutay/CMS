import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import { RequestsService } from './logInAndSignupService/requests.service'
import { DataRequestsService } from './request-to-BE/data-requests.service'

import { UserData } from './providers/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public sample = ''
  appPages = [
    {
      title: 'Events And Announcements',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Trainings/Classes',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    // {
    //   title: 'Map',
    //   url: '/app/tabs/map',
    //   icon: 'map'
    // },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ]
  loggedIn = false;
  dark = false;

  constructor(
    private request: RequestsService,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private datarequest: DataRequestsService
  ) {
    this.initializeApp();
  }

  async ngOnInit() {

    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.sample = res
    })
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    this.request.getCurrentUserInStorage().then(res => {
      if(res != null) {
        this.updateLoggedInStatus(true)
      }else {
        this.updateLoggedInStatus(false)
      }
    })
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.request.logoutService().then(res => {
      location.reload()
    })
    this.router.navigate(['']);
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
