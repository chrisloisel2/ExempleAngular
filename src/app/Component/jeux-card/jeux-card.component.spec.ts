import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxCardComponent } from './jeux-card.component';

describe('JeuxCardComponent', () => {
  let component: JeuxCardComponent;
  let fixture: ComponentFixture<JeuxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuxCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
