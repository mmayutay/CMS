import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  public login = { username: '', password: '', currentpassword: ''};
  public showPass = false;
  public showCurrentPass = false;
  public type = 'password';
  public type2 = 'password';
  public password = {currentPass: '', newPass:''};
  constructor() { }

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
  

}
