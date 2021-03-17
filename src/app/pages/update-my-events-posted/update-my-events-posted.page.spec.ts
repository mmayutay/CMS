import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMyEventsPostedPage } from './update-my-events-posted.page';

describe('UpdateMyEventsPostedPage', () => {
  let component: UpdateMyEventsPostedPage;
  let fixture: ComponentFixture<UpdateMyEventsPostedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMyEventsPostedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMyEventsPostedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
