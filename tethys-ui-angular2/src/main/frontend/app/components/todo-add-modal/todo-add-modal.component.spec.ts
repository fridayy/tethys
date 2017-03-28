import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddModalComponent } from './todo-add-modal.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";

describe('TodoAddModalComponent', () => {
  let component: TodoAddModalComponent;
  let fixture: ComponentFixture<TodoAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule.forRoot()],
      declarations: [ TodoAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
