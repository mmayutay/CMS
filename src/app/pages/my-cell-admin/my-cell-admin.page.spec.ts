import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCellAdminPage } from './my-cell-admin.page';

describe('MyCellAdminPage', () => {
  let component: MyCellAdminPage;
  let fixture: ComponentFixture<MyCellAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCellAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCellAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
