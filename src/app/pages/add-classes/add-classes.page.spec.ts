import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddClassesPage } from './add-classes.page';

describe('AddClassesPage', () => {
  let component: AddClassesPage;
  let fixture: ComponentFixture<AddClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
