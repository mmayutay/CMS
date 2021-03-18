import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeakerFilterPage } from './speaker-filter.page';

describe('SpeakerFilterPage', () => {
  let component: SpeakerFilterPage;
  let fixture: ComponentFixture<SpeakerFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
