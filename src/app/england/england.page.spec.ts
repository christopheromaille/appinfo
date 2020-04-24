import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnglandPage } from './england.page';

describe('EnglandPage', () => {
  let component: EnglandPage;
  let fixture: ComponentFixture<EnglandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnglandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
