import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


// import { MenuController } from '@ionic/angular';

import { filter } from 'rxjs/operators';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

@Component({
  selector: 'pages-auxiliary',
  templateUrl: 'auxiliary.page.html',
  styleUrls: ['./auxiliary.page.scss'],
})
export class AuxiliaryPage implements OnInit {
  public type = '';
  public storage: any;
  content:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dataRequest: DataRequestsService,
    private alertController: AlertController,

    // public menuController: MenuController
    ) { }

  ngOnInit() {
    // this.menuController.enable(false);
    this.type = this.activatedRoute.snapshot.paramMap.get('type')
    console.log(this.type)
    this.getAllAuxiliaryMembers(this.type);

    this.activatedRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log(params);

      this.content = params.content;
      console.log("Auxiliary: ", this.content);

      this.dataRequest.displayAuxiliary({auxi: this.content}).subscribe(data => {
          this.storage = data;
          console.log(data);
          console.log("Sample data: ", this.storage);
        });
    });
  }

  getAllAuxiliaryMembers(aux) {
    console.log(aux)
    this.dataRequest.displayAuxiliary({auxi: aux}).subscribe(data => {
      console.log(data)
      this.storage = data
    })
  }

  async presentAlertPrompt(info) {
    const alert = await this.alertController.create({
      message: 'Auxiliary',
      cssClass: 'my-custom-class',
      header: 'Details!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1-id',
          value: 'Firstname: ' + info.firstname,
          placeholder: 'firstName',
          disabled: true
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'Lastname: ' + info.lastname,
          placeholder: 'lastName',
          disabled: true
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name3-id',
          value: 'Address: ' + info.address,
          placeholder: 'Address',
          disabled: true
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name4-id',
          value: 'Email: ' + info.email,
          placeholder: 'Email',
          disabled: true
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name5-id',
          value: 'Contact No.: ' + info.contact_number,
          placeholder: 'Contact Number',
          disabled: true
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name6-id',
          value: 'Leader: ' + info.leader,
          placeholder: 'Leader',
          disabled: true
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
