import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from '../../interfaces/user-options';
// import { userInfo } from 'os';
// import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public updatedData: userModel
  update: userModel = {
    newUser: {
      Lastname: '',
      Firstname: '',
      Birthday: '',
      Age: null,
      Address: '',
      Marital_status: '',
      Email: '',
      Contact_number: null,
      Facebook: '',
      Instagram: '',
      Twitter: '',
    }, groupBelong: {
      Leader: ''
    }, role: {
      code: 'Member'
    }
  };

  constructor(
    private request: RequestsService,
    private datasRequest: DataRequestsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.updatedData = this.update
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.datasRequest.getTheCurrentUser({userID: res}).subscribe(data => {
        this.update.newUser = data[0]
        console.log(this.updatedData)
      })
    })
  }
  

  onUpdate(form: NgForm) {
    console.log(this.updatedData)

    // this.request.updateInfo(this.update).subscribe(res => {
    //   console.log(res)
    //   this.router.navigate(['/app/tabs/account'])
    // })
  }
}

