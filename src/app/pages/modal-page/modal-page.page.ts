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

  constructor(
    private request: RequestsService,
    private datasRequest: DataRequestsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.datasRequest.getTheCurrentUser({userID: res}).subscribe(data => {
        this.updatedData.newUser = data[0]
        this.updatedData.newUser.Lastname = data[0].lastname
        this.updatedData.newUser.Firstname = data[0].firstname
        this.updatedData.newUser.Birthday = data[0].birthday
        this.updatedData.newUser.Age = data[0].age
        this.updatedData.newUser.Address = data[0].address
        this.updatedData.newUser.Marital_status = data[0].marital_status
        this.updatedData.newUser.Email = data[0].email
        this.updatedData.newUser.Contact_number = data[0].contact_number
        this.updatedData.newUser.Facebook = data[0].facebook
        this.updatedData.newUser.Instagram = data[0].instagram
        this.updatedData.newUser.Twitter = data[0].twitter
      })
    })
  }
  

  onUpdate() {
    this.request.updateInfo(this.updatedData).subscribe(res => {
      location.reload();
      this.router.navigate(['/account'])
    })
  }
}

