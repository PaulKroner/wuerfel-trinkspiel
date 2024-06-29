import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePresetComponent } from './dice-preset.component';

describe('DicePresetComponent', () => {
  let component: DicePresetComponent;
  let fixture: ComponentFixture<DicePresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicePresetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicePresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
