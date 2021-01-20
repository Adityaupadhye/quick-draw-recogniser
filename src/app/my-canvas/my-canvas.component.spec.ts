import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCanvasComponent } from './my-canvas.component';

describe('MyCanvasComponent', () => {
  let component: MyCanvasComponent;
  let fixture: ComponentFixture<MyCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
