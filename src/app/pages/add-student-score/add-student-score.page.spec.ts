import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStudentScorePage } from './add-student-score.page';

describe('AddStudentScorePage', () => {
  let component: AddStudentScorePage;
  let fixture: ComponentFixture<AddStudentScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentScorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
