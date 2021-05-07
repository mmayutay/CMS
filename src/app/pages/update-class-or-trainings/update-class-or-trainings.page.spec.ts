import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateClassOrTrainingsPage } from './update-class-or-trainings.page';

describe('UpdateClassOrTrainingsPage', () => {
  let component: UpdateClassOrTrainingsPage;
  let fixture: ComponentFixture<UpdateClassOrTrainingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClassOrTrainingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateClassOrTrainingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
