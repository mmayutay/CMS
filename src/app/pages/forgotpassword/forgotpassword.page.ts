import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RequestsService } from '../../logInAndSignupService/requests.service';
// import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  public login = { username: '', password: '', currentpassword: ''};
  public showPass = false;
  public showCurrentPass = false;
  public type = 'password';
  public type2 = 'password';
  public password = {currentPass: '', newPass:''};
  public contact_number = ''
  public contactNumber = ''


  constructor(
    public request: RequestsService,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    // public navCtrl: NavController, 
    // public navParams: NavParams, 
    public formbuilder:FormBuilder
  ) { }

  ngOnInit() {
  }


  showCurrentPassword() {
    this.showCurrentPass = !this.showCurrentPass;
    if(this.showCurrentPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }
  
  sendCode(value){
    console.log("CLICKED!!")
    console.log(value);
    // console.log(this.contact_number)
    this.presentAlert()
    this.request.sendCodeReset(value).subscribe(res => {
      this.successfullySent()
      console.log(res)
    })
  }

  async presentAlert() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  async successfullySent() {
    const alert = await this.alertController.create({
      header: 'Sent',
      message: 'Successfully sent',
      buttons: ['OK']
    });
    await alert.present();
  }

  resetPassword(){
    this.request.resetPass(this.password).subscribe(res => {
      console.log(res)
    })
  }

  // Kini siya nga function kay mu activate siya sa button kung naka input na ug number 
  activateNumberButton(value) {
    this.contact_number = value.target.value
  }
}
