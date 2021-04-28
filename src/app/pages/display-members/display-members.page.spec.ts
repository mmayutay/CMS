import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayMembersPage } from './display-members.page';

describe('DisplayMembersPage', () => {
  let component: DisplayMembersPage;
  let fixture: ComponentFixture<DisplayMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
