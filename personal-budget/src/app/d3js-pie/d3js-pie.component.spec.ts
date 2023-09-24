import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsPieComponent } from './d3js-pie.component';

describe('D3jsPieComponent', () => {
  let component: D3jsPieComponent;
  let fixture: ComponentFixture<D3jsPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3jsPieComponent]
    });
    fixture = TestBed.createComponent(D3jsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
