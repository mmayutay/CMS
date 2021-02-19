import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    public datasRequest: DataRequestsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log(params);

      this.content = params.content;
      console.log("Auxiliary: ", this.content);

      this.datasRequest.displayAuxiliary({auxi: this.content}).subscribe(data => {
          this.storage = data;
          console.log(data);
          console.log("Sample data: ", this.storage);
        });
    });
    // this.activatedRoute.queryParams.filter(params => params.content)
    // .subscribe(params => {
    //   console.log(params);

    //   this.content = params.content;
    //   console.log("Auxiliary: ", this.content);
    // });
  }

  // auxiliaryFunction() {
  //   this.router.navigateByUrl('auxiliary')
  //   console.log("Auxiliary");
    
  // }

}
