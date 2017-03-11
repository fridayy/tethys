/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoProviderService } from './todo-provider.service';

describe('TodoProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoProviderService]
    });
  });

  it('should ...', inject([TodoProviderService], (service: TodoProviderService) => {
    expect(service).toBeTruthy();
  }));
});
