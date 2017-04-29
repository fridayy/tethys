import {TodoProviderService} from "./todo-provider.service";
import {ConnectionBackend, Http, RequestOptions, RequestOptionsArgs} from "@angular/http";
import {Connection, Response} from "@angular/http/src";
import {Observable} from "rxjs/Observable";
import {ResponseOptions} from "@angular/http/src/base_response_options";
/**
 * Created by bnjm on 3/28/17.
 */

describe('TodoProviderServiceIsolated', () => {

  let classUnderTest: TodoProviderService;

  beforeEach(() => {
    classUnderTest = new TodoProviderService(new MockedHttp(new MockedConnectionBackend(), new MockedRequestOptions()))
  });

  it('can be instantiiated without angular', () => {
    expect(classUnderTest).not.toBeUndefined();
  });

  it('get returns expected element', () => {
    let response = classUnderTest.provideTodos(" ");

    expect(response.page.number).toBe(1);
    expect(response.page.totalElements).toBe(1);
    expect(response.todoResources.length).toBe(0);
  });
});


class MockedResponse extends Response {

  constructor(responseOptions: ResponseOptions) {
    super(responseOptions);
  }


  json(): any {
    return {
      _embedded: {
        todoResources: []
      },
      _links: { self: "mocked"},
      accessed: {creationTime: "-"},
      page: {totalElements: 1, totalPages: 1, number: 1, size: 1}
    };
  }

  text(): string {
    return "";
  }
}

class MockedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }


  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    let res: Response = new MockedResponse(new MockedResponseOptions());
    return Observable.of(res);
  }
}

class MockedConnectionBackend extends ConnectionBackend {
  createConnection(request: any): Connection {
    throw new Error('Method not implemented.');
  }
}

class MockedRequestOptions extends RequestOptions {

}

class MockedResponseOptions extends ResponseOptions {

}


