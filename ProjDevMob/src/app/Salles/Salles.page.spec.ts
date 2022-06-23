import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Salles } from './Salles.page';

describe('Salles', () => {
  let component: Salles;
  let fixture: ComponentFixture<Salles>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Salles],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Salles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
