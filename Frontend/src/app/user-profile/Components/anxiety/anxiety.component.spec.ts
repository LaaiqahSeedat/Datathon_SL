import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyComponent } from './anxiety.component';

describe('AnxietyComponent', () => {
  let component: AnxietyComponent;
  let fixture: ComponentFixture<AnxietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnxietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
