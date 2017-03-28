/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoProviderService } from './todo-provider.service';
import {HttpModule} from "@angular/http";

describe('TodoProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TodoProviderService]
    });
  });

  it('should be injected by angular', inject([TodoProviderService], (service: TodoProviderService) => {
    expect(service).toBeTruthy();
  }));
});
