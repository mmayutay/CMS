import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateSelectedTrainingPage } from './update-selected-training.page';

describe('UpdateSelectedTrainingPage', () => {
  let component: UpdateSelectedTrainingPage;
  let fixture: ComponentFixture<UpdateSelectedTrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSelectedTrainingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSelectedTrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
