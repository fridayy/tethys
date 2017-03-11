/**
 * Provides a generic version of HTTP methods for services to use.
 * Created by bnjm on 3/11/17.
 */
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

export class HttpService<T> {

  constructor(private http: Http) {
  }

  public get(url: string): Observable<T> {
    return this.http.get(url)
      .map(response => response.json())
  }
}
