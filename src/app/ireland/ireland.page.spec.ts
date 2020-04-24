import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrelandPage } from './ireland.page';

describe('IrelandPage', () => {
  let component: IrelandPage;
  let fixture: ComponentFixture<IrelandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrelandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrelandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
