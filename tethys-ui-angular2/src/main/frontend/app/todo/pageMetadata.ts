/**
 * Created by bnjm on 2/4/17.
 */
export interface PageMetadata {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export class PageMetadata implements PageMetadata {

  constructor(public size:number, public totalElements:number, public totalPages:number, public number:number) {
  }
}
