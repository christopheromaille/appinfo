import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrancePage } from './france.page';

describe('FrancePage', () => {
  let component: FrancePage;
  let fixture: ComponentFixture<FrancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
