import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoVideoComponent } from './cuerpo-video.component';

describe('CuerpoVideoComponent', () => {
  let component: CuerpoVideoComponent;
  let fixture: ComponentFixture<CuerpoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
