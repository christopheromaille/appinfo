import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpainPage } from './spain.page';

describe('SpainPage', () => {
  let component: SpainPage;
  let fixture: ComponentFixture<SpainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
