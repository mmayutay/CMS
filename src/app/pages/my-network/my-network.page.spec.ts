import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyNetworkPage } from './my-network.page';

describe('MyNetworkPage', () => {
  let component: MyNetworkPage;
  let fixture: ComponentFixture<MyNetworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNetworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
