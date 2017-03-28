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
    component.dataElement = new MockedDataElement(0, "mock");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockedDataElement {
  id: number;
  label: string;


  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}
