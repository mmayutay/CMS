import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  public users = "any"

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async userLogin() {
    console.log("nisud siya diri...")
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    
    this.router.navigateByUrl('/login/' + this.users)
  }

}
