import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GestionEmploye } from './GestionEmploye.page';

describe('GestionEmploye', () => {
  let component: GestionEmploye;
  let fixture: ComponentFixture<GestionEmploye>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEmploye],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionEmploye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
