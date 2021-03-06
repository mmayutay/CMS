import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public updatedData  = {
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
  public update;

  constructor(
    private request: RequestsService,
    private datasRequest: DataRequestsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.datasRequest.editUserInfo({userID: res}).subscribe(data => {
        this.update.newUser = data[0]
        console.log(this.update)
      })
    })
  }
  

  onUpdate() {
    this.request.updateInfo(this.update).subscribe(res => {
      location.reload();
      this.router.navigate(['/account'])
    })
  }
}

