import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportingsPage } from './reportings.page';

describe('ReportingsPage', () => {
  let component: ReportingsPage;
  let fixture: ComponentFixture<ReportingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
