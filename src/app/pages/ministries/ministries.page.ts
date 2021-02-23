import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  public type = ''

  constructor(
    // private router: Router,
    private activeRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.paramMap.get('type')
  }

  async addMinistryAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Add Member",
      message: "Please add member.",
      inputs: [
        {
          name: "name",
          placeholder: "First Name",
          type: "text",
        },
        {
          name: "last",
          placeholder: "Lastname",
          type: "text",
        },
        {
          name: "address",
          placeholder: "Address",
          type: "text",
        },
        {
          name: "email",
          placeholder: "Email",
          type: "text",
        },
        {
          name: "contact",
          placeholder: "Contact Number",
          type: "number",
        },
        {
          name: "leader",
          placeholder: "Leader",
          type: "text",
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
          }
        },
        {
          text: "OK",
          handler: (data) => {
            Swal.fire({
              title: 'Do you want to save the changes? <br><br> Total Cost: ₱',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: `Save`,
              denyButtonText: `Don't save`,
            }).then((result) => {
              if (result.isConfirmed) {
                /* Read more about isConfirmed, isDenied below */
                if (data.name && data.last && data.address && data.email && data.contact && data.leader) {
                  Swal.fire('Saved!', '', 'success')
               
                } else {
                  this.inputError();
                }
              } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async inputError() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Error!",
      message: "Please fill up the needed information.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
          }
        },
        {
          text: "OK",
          handler: () => {
            this.addMinistryAlert();
          }
        }
      ]
    });

    await alert.present();
  }

}
