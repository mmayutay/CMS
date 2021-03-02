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
    private alertCtrl: AlertController,

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

}
