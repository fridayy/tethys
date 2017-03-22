import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkTableRowComponent } from './benchmark-table-row.component';

describe('BenchmarkTableRowComponent', () => {
  let component: BenchmarkTableRowComponent;
  let fixture: ComponentFixture<BenchmarkTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
