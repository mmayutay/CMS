import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  public login = { username: '', password: '', currentpassword: '' };
  public showPass = false;
  public showCurrentPass = false;
  public type = 'password';
  public type2 = 'password';
  public password = { username: '', currpassword: '', newPassword: '' };
  public contact_number = ''
  public contactNumber = ''


  constructor(
    public request: RequestsService,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    // public navCtrl: NavController, 
    // public navParams: NavParams, 
    public formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  showCurrentPassword() {
    this.showCurrentPass = !this.showCurrentPass;
    if (this.showCurrentPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({

      header: 'Error',
      message: 'Email or password is incorrect.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async successfullySent() {
    const alert = await this.alertController.create({
      header: 'Sent',
      message: 'Password updated succesfully.',
      buttons: ['OK']
    });
    await alert.present();
  }

  resetPassword(data) {
    console.log(data.value);
    this.request.resetPass(data.value).subscribe( res => {
      console.log(res);
      if(res != null) {
        this.successfullySent();
        this.router.navigateByUrl('/login');
      } else {
        this.presentAlert();
        this.router.navigateByUrl('/resetpassword');
      }
    })
  }

  // Kini siya nga function kay mu activate siya sa button kung naka input na ug number 
  activateNumberButton(value) {
    this.contact_number = value.target.value
  }
}
